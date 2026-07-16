"use client";

import { type FormEvent, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { contactFormClasses } from "@/components/contactFormTokens";

const projectTypes = ["預售屋", "新成屋", "舊屋翻新", "商業空間", "其它"];
const budgetOptions = [
  "100 萬以下",
  "100 - 200 萬",
  "200 - 300 萬",
  "300 - 500 萬",
  "500 萬以上",
  "尚未確定",
];

type SubmitState =
  | {
      kind: "idle";
      message: "";
    }
  | {
      kind: "success" | "error";
      message: string;
    };

function TextField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className={contactFormClasses.label}>
        {label}
        {required ? (
          <span className={contactFormClasses.note}>(required)</span>
        ) : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={contactFormClasses.control}
      />
    </label>
  );
}

function RequiredMark() {
  return <span className={contactFormClasses.note}>(required)</span>;
}

function ChoiceField({
  name,
  value,
  required = false,
}: {
  name: string;
  value: string;
  required?: boolean;
}) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        className="peer sr-only"
      />
      <span className={contactFormClasses.choice}>{value}</span>
    </label>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    kind: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ kind: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "表單送出失敗，請稍後再試。");
      }

      formRef.current?.reset();
      setSubmitState({
        kind: "success",
        message: result.message ?? "已收到您的需求，我們會盡快與您聯繫。",
      });
    } catch (error) {
      setSubmitState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "表單送出失敗，請稍後再試。",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <p className={contactFormClasses.label}>Name 姓名</p>
        <div className="mt-1.5 grid gap-4 md:grid-cols-2">
          <TextField label="First Name" name="firstName" required />
          <TextField label="Last Name" name="lastName" required />
        </div>
      </div>

      <fieldset>
        <legend className={contactFormClasses.label}>
          Gender 稱謂
          <RequiredMark />
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {["先生", "小姐"].map((option) => (
            <ChoiceField
              key={option}
              name="gender"
              value={option}
              required
            />
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5">
        <TextField label="Phone 手機號碼" name="phone" required />
        <TextField label="Line ID" name="lineId" />
        <TextField label="Location 施工地區" name="location" required />
      </div>

      <fieldset>
        <legend className={contactFormClasses.label}>
          Type 類型
          <RequiredMark />
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <ChoiceField
              key={type}
              name="projectType"
              value={type}
              required
            />
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5">
        <TextField label="Area 室內坪數" name="area" required />
        <TextField
          label="Date 預計入住日期"
          name="moveInDate"
          type="date"
          required
        />
        <label className="block">
          <span className={contactFormClasses.label}>
            Budget 整體預算
            <RequiredMark />
          </span>
          <span className="relative block">
            <select
              name="budget"
              required
              defaultValue=""
              className={`${contactFormClasses.control} h-11 appearance-none rounded-none pr-9`}
            >
              <option value="" disabled>
                Select an option
              </option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute bottom-3 right-0 size-4 text-contact-muted"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>
        </label>
        <label className="block">
          <span className={contactFormClasses.label}>Message 訊息</span>
          <textarea
            name="message"
            rows={3}
            className={contactFormClasses.textarea}
          />
        </label>
      </div>

      <div className="flex flex-col items-end gap-4 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${contactFormClasses.button} disabled:cursor-not-allowed disabled:bg-contact-muted`}
        >
          {isSubmitting ? "送出中" : "送出"}
        </button>

        <p
          className={`min-h-6 text-right text-contact-choice font-medium ${
            submitState.kind === "error"
              ? "text-signal"
              : "text-contact-muted"
          }`}
          role="status"
          aria-live="polite"
        >
          {submitState.message}
        </p>
      </div>
    </form>
  );
}
