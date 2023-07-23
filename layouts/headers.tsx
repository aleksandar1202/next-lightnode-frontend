import { useState, Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReddit,
  faTelegram,
  faDiscord,
  faGithub,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClipboard,
  faTimes,
  faBars,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { navigations } from "common/constants/navigation";
import { LNBadge } from "components/common/badge";
import { LNButton } from "components/common/button";
import { LNModal } from "components/common/modal";
import { NavigationObjectType } from "common/types/common";
import { WalletTypes } from "common/constants/ui";
import { Metamask } from "common/web3/connectors";
import { shortenWalletAddress } from "common/utils/web3";

export const AnonymousHeader = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClickExternalLinks = (type: string) => {
    const link = {
      REDDIT: "https://www.reddit.com/r/Lightnode/",
      TWITTER: "https://twitter.com/lightnode_us",
      GITHUB: "https://github.com/LightNodeStaking",
      DISCORD: "https://discord.gg/svZJ5KVDMt",
      TELEGRAM: "https://t.me/lightnodechat",
      WHITEPAPER: "/assets/docs/whitepaper.pdf",
      MEDIUM: "https://medium.com/@lightnode",
    }[type];
    setOpen(false);

    // @ts-ignore
    window.open(link, "_blank").focus();
  };

  const NavItems = () => (
    <Fragment>
      <a href="#about" className="header-link" onClick={() => setOpen(false)}>
        About
      </a>
      <a
        href="#services"
        className="header-link"
        onClick={() => setOpen(false)}
      >
        Services
      </a>
      <a
        href="#validators"
        className="header-link"
        onClick={() => setOpen(false)}
      >
        Validators
      </a>
      <a href="#contact" className="header-link" onClick={() => setOpen(false)}>
        Contact
      </a>
    </Fragment>
  );

  const NavSocialItems = () => (
    <Fragment>
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faReddit}
        onClick={() => onClickExternalLinks("REDDIT")}
      />
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faTelegram}
        onClick={() => onClickExternalLinks("TELEGRAM")}
      />
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faDiscord}
        onClick={() => onClickExternalLinks("DISCORD")}
      />
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faGithub}
        onClick={() => onClickExternalLinks("GITHUB")}
      />
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faClipboard}
        onClick={() => onClickExternalLinks("WHITEPAPER")}
      />
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faTwitter}
        onClick={() => onClickExternalLinks("TWITTER")}
      />
      <FontAwesomeIcon
        className="header-social-icon"
        icon={faMedium}
        onClick={() => onClickExternalLinks("MEDIUM")}
      />
    </Fragment>
  );

  return (
    <div className="sticky top-0 z-20 bg-blue-800 grid grid-cols-1 lg:grid-cols-2 py-5 md:py-10 px-10 md:px-20">
      <div className="header-navigation">
        <NavItems />
      </div>
      <div className="header-social flex justify-end">
        <NavSocialItems />
        <FontAwesomeIcon
          className="header-open-drawer"
          icon={faBars}
          onClick={() => setOpen(true)}
        />
      </div>
      <div
        className={`${
          open ? "fixed top-0 left-0 right-0 bottom-0" : "hidden"
        } flex flex-col justify-center items-center bg-blue-800`}
      >
        <FontAwesomeIcon
          className="header-close-drawer ml-52 mb-12"
          icon={faTimes}
          onClick={() => setOpen(false)}
        />
        <div className="header-navigation mobile text-center">
          <NavItems />
        </div>
        <div className="header-social mobile mt-12">
          <NavSocialItems />
        </div>
      </div>
    </div>
  );
};

export const ClientHeader = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [wallet, setWallet] = useState<any>(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const router = useRouter();

  const navigation = useMemo((): NavigationObjectType => {
    const n = navigations.find((n) => router.pathname.includes(n.href));
    return (
      n || { href: "", title: "", icon: "", size: { width: 0, height: 0 } }
    );
  }, [router]);

  const onConnectWalletClicked = async (walletName: string) => {
    if (walletName === "Metamask") {
      setWallet(Metamask);
    } else {
      setWallet(null);
    }
    activateWallet();
    setIsConnectModalOpen(false);
  };

  const onActivateWalletClicked = () => {
    setIsConnectModalOpen(true);
  };

  const activateWallet = async () => {
    if (wallet) {
      try {
        await activate(wallet);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const deactivateWallet = async () => {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  };

  return (
    <div className="py-10 flex justify-between flex-col-reverse md:flex-row">
      <div className="text-white flex items-center">
        <img
          src={navigation.icon}
          width={navigation.size.width * 1.5}
          height={navigation.size.height * 1.5 || 0}
          className="mr-4"
        />
        <span className="text-4xl">{navigation.title}</span>
      </div>
      <div className="flex items-center justify-between md:justify-end pr-4 mb-6 md:mb-0">
        {!active ? (
          <LNButton
            style="outlined"
            title="Connect Wallet"
            className="mr-6 uppercase"
            onClick={onActivateWalletClicked}
          />
        ) : (
          <LNButton
            style="outlined"
            title={<span className="normal-case">{shortenWalletAddress(account)}</span>}
            className="mr-6 uppercase"
            onClick={deactivateWallet}
          />
        )}
        <LNBadge text="">
          <FontAwesomeIcon
            className="text-white text-2xl hover:text-yellow hover:cursor-pointer duration-300"
            icon={faBell}
          />
        </LNBadge>
      </div>
      <LNModal
        isOpen={isConnectModalOpen}
        onClose={() => {
          setIsConnectModalOpen(false);
        }}
        className="max-w-500 w-fit"
      >
        <p className="text-white text-2xl mb-8">Connect Wallet</p>
        <p className="text-gray text-xl mb-4">
          Connect with one of our available{" "}
          <u className="text-yellow hover:cursor-pointer">wallet</u> providers
          or create a new one.
        </p>
        {WalletTypes.map((w, wi) => (
          <div
            key={wi}
            onClick={() => onConnectWalletClicked(w.name)}
            className="mb-2 rounded border border-blue-700 hover:border-blue-500 flex justify-between p-4 hover:cursor-pointer"
          >
            <span className="grow text-white text-xl ml-2">{w.name}</span>
            <div className="w-10 flex justify-center">
              <img src={w.icon} />
            </div>
          </div>
        ))}
        <p className="text-center mt-6">
          <u
            className="hover:cursor-pointer text-gray"
            onClick={() => setIsConnectModalOpen(false)}
          >
            I don't have wallet yet
          </u>
        </p>
      </LNModal>
    </div>
  );
};
