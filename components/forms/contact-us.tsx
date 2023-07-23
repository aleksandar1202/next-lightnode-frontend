import { useState, useMemo, MouseEvent } from "react";
import { LNInput } from "components/common/input";
import { LNTextArea } from "components/common/textarea";
import { LNInputArgs } from "common/types/components";
import { LNButton } from "components/common/button";

type ContactUsFormField = "name" | "email" | "company" | "subject" | "message";
interface ContactUsFormType {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export const LNContactUsForm = () => {
  const [form, setForm] = useState<ContactUsFormType>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const onChangeField = (field: ContactUsFormField, value: string): void => {
    setForm({ ...form, [field]: value });
  };

  const onSubmit = () => {
    console.log("TODO");
  };

  return (
    <form>
      <p className="text-xl text-gray-light uppercase mb-12">Contact us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LNInput
          size="large"
          value={form.name}
          onChange={(v: string) => onChangeField("name", v)}
          placeHolder="Your name"
        />
        <LNInput
          size="large"
          value={form.email}
          onChange={(v: string) => onChangeField("email", v)}
          placeHolder="Email address"
        />
        <LNInput
          size="large"
          value={form.company}
          onChange={(v: string) => onChangeField("company", v)}
          placeHolder="Your company"
        />
        <LNInput
          size="large"
          value={form.subject}
          onChange={(v: string) => onChangeField("subject", v)}
          placeHolder="Subject"
        />
      </div>
      <div className="grid grid-cols-1 mt-8">
        <LNTextArea
          size="large"
          value={form.message}
          onChange={(v: string) => onChangeField("message", v)}
          placeHolder="Message"
        />
      </div>
      <LNButton
        size="large"
        style="filled"
        title="Send message"
        className="mt-8 uppercase"
        onClick={onSubmit}
      />
    </form>
  );
};
