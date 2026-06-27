import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { googleMapEmbedUrl, studio } from "@/data/x3Content";

export const metadata: Metadata = {
  title: "Contact | X3 Design",
  description:
    "Contact X3 Design for residential interior design, customization planning, and site supervision consultation.",
};

const projectTypes = ["預售屋", "新成屋", "舊屋翻新", "商業空間", "其它"];
const budgetOptions = [
  "100 萬以下",
  "100 - 200 萬",
  "200 - 300 萬",
  "300 - 500 萬",
  "500 萬以上",
  "尚未確定",
];

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
      <span className="text-sm font-medium text-stone-950">
        {label}
        {required ? (
          <span className="ml-1 text-xs font-normal text-stone-500">
            (required)
          </span>
        ) : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full border-0 border-b border-stone-700 bg-transparent px-0 text-base text-stone-950 outline-none transition placeholder:text-stone-500 focus:border-stone-950 focus:ring-0"
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#deddd9] pt-32 text-stone-950 md:pt-40">
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <MotionReveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-950"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Home
          </Link>
        </MotionReveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.82fr_1.08fr] lg:gap-24">
          <MotionReveal delay={40} distance={16}>
            <div>
              <h1 className="text-xl font-medium uppercase tracking-normal text-stone-950">
                Contact <span className="font-normal">聯絡我們</span>
              </h1>
              <div className="mt-12 text-xl leading-8 text-stone-950 md:text-2xl md:leading-9">
                <p>{studio.address}</p>
                <p>
                  <Link
                    href={`mailto:${studio.email}`}
                    className="transition hover:text-stone-600"
                  >
                    {studio.email}
                  </Link>
                </p>
                <p>
                  <Link
                    href={`tel:${studio.phone.replace(/[()\\s-]/g, "")}`}
                    className="transition hover:text-stone-600"
                  >
                    {studio.phone}
                  </Link>
                </p>
              </div>

              <div className="mt-14 aspect-[4/5] overflow-hidden bg-warm-paper md:aspect-[5/4] lg:aspect-[4/5]">
                <iframe
                  title="X3 Design map"
                  src={googleMapEmbedUrl}
                  className="h-full w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={120} distance={16}>
            <form
              action={`mailto:${studio.email}`}
              method="post"
              encType="text/plain"
              className="pt-1"
            >
              <div>
                <p className="text-sm font-medium text-stone-950">Name 姓名</p>
                <div className="mt-2 grid gap-5 md:grid-cols-2">
                  <TextField
                    label="First Name"
                    name="firstName"
                    required
                  />
                  <TextField label="Last Name" name="lastName" required />
                </div>
              </div>

              <fieldset className="mt-7">
                <legend className="text-sm font-medium text-stone-950">
                  Gender 稱謂
                  <span className="ml-1 text-xs font-normal text-stone-500">
                    (required)
                  </span>
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["先生", "小姐"].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        required
                        className="peer sr-only"
                      />
                      <span className="inline-flex h-8 cursor-pointer items-center rounded-full border border-stone-700 px-4 text-sm text-stone-950 transition peer-checked:bg-stone-950 peer-checked:text-white">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7 grid gap-6">
                <TextField label="Phone 手機號碼" name="phone" required />
                <TextField label="Line ID" name="lineId" />
                <TextField label="Location 施工地區" name="location" required />
              </div>

              <fieldset className="mt-7">
                <legend className="text-sm font-medium text-stone-950">
                  Type 類型
                  <span className="ml-1 text-xs font-normal text-stone-500">
                    (required)
                  </span>
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <label key={type}>
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        required
                        className="peer sr-only"
                      />
                      <span className="inline-flex h-8 cursor-pointer items-center rounded-full border border-stone-700 px-4 text-sm text-stone-950 transition peer-checked:bg-stone-950 peer-checked:text-white">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7 grid gap-6">
                <TextField label="Area 室內坪數" name="area" required />
                <TextField
                  label="Date 預計入住日期"
                  name="moveInDate"
                  type="date"
                  required
                />
                <label className="block">
                  <span className="text-sm font-medium text-stone-950">
                    Budget 整體預算
                    <span className="ml-1 text-xs font-normal text-stone-500">
                      (required)
                    </span>
                  </span>
                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className="mt-2 h-11 w-full border-0 border-b border-stone-700 bg-transparent px-0 text-base text-stone-950 outline-none transition focus:border-stone-950 focus:ring-0"
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
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-stone-950">
                    Message 訊息
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-y border-0 border-b border-stone-700 bg-transparent px-0 text-base leading-7 text-stone-950 outline-none transition focus:border-stone-950 focus:ring-0"
                  />
                </label>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center bg-stone-950 px-6 text-sm font-medium text-white transition hover:bg-stone-700"
                >
                  送出
                </button>
              </div>
            </form>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
