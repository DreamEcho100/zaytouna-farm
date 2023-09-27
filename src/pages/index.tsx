import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";

import {
  clsx,
  generalAnimationIntersectionObserverCB,
  useInitGeneralAnimationIntersectionObserver,
} from "~/components/utils";
import { type IconType, type IconBaseProps } from "react-icons";

const socialLinks: {
  children: { type: "icon"; Icon: IconType; props?: IconBaseProps };
  title: string;
  href: string;
}[] = [
  {
    title: "facebook",
    href: "https://www.facebook.com/profile.php?id=61551354688229&mibextid=LQQJ4d",
    children: {
      type: "icon",
      Icon: AiFillFacebook,
    },
  },
  {
    title: "tikTok",
    href: "https://www.tiktok.com/@zytoonah?_t=8fsY9B7oAs9&_r=1",
    children: {
      type: "icon",
      Icon: BiLogoTiktok,
    },
  },
  {
    title: "instagram",
    href: "https://instagram.com/zytoonah.eg?igshid=MzRlODBiNWFlZA==",
    children: {
      type: "icon",
      Icon: PiInstagramLogoFill,
    },
  },
  {
    title: "telephone",
    href: "tel:+201281238888",
    children: {
      type: "icon",
      Icon: BsFillTelephoneFill,
    },
  },
  {
    title: "whatsapp",
    href: "tel:+201281238888",
    children: {
      type: "icon",
      Icon: IoLogoWhatsapp,
    },
  },
];

export default function Home() {
  useInitGeneralAnimationIntersectionObserver(
    generalAnimationIntersectionObserverCB,
  );

  return (
    <>
      <Head>
        <title>زيتونة - مزرعة الزيتون</title>
        <meta
          name="description"
          content=" تأسست شركة زيتونة برعاية شركة سماء العرب في عام 2014، ومنذ ذلك الحين، حققت نجاحًا باهرًا في عالم صناعة زيت الزيتون والمنتجات المشتقة."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed inset-x-0 z-10 bg-white/20 backdrop-blur-[1px]">
        <div className="item-center h-main-header-h max-w-main mx-auto flex items-center justify-between gap-4 px-8 font-medium">
          <Link href="/" title="home">
            <Image
              src="/images/Screen_Shot_2023-09-15_at_12.38.49_PM-removebg-preview.png"
              alt="zaytona logo"
              width={200}
              height={150}
              className="h-10 w-16"
            />
          </Link>
          <ul className="flex items-center gap-4">
            {[{ name: "منتجاتنا", href: "#product-sample" }].map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main className="flex flex-col">
        <section className="relative h-screen max-h-[60rem] min-h-[30rem] text-white">
          <Image
            src="/images/808ed3c7-1d70-4327-872f-e5c00b689ad3.jpg"
            width={1024}
            height={1024}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black/30" />
          <div className="max-w-main relative mx-auto flex h-full w-full items-center justify-center text-center">
            <div className="relative flex w-11/12 flex-col gap-8 rounded-lg bg-black/10 px-8 py-16 text-xl">
              <h1 className="text-5xl">
                مرحبًا بك في مزرعة الزيتون &ldquo;زيتونة&rdquo;
              </h1>
              <p className="leading-relaxed">
                حيث تلتقي العناية الحديثة بالزيتون مع عراقة التقليد.
                <br />
                تأسست شركة زيتونة برعاية شركة سماء العرب في عام 2014، ومنذ ذلك
                الحين،
                <br />
                حققت نجاحًا باهرًا في عالم صناعة زيت الزيتون والمنتجات المشتقة.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white text-slate-900">
          <div
            className={clsx(
              "max-w-main mx-auto flex gap-8 px-16 pb-12 pt-36",
              "flex-col items-center justify-center lg:flex-row lg:justify-between",
            )}
          >
            <article className="flex flex-col gap-6 text-xl">
              <h2 className="border-b-special-primary-500 w-fit border-b-[0.25rem] pb-4 text-4xl">
                جودة زيت الزيتون فائقة
              </h2>
              <div className="flex flex-col gap-1">
                <p className="max-w-[424px] leading-relaxed">
                  تتميز مزرعتنا بجودة زيت الزيتون الفائقة، حيث يتم حصاد هذه
                  الثمار النبيلة بعناية فائقة وبكل حب. نحن نعمل أيضًا على إنتاج
                  الزيتون المخلل اللذيذ، الذي يشكل جزءًا هامًا من منتجاتنا. بفضل
                  تقنيات التخليل المبتكرة، نقدم لكم تجربة متميزة مع زيتون مخلل
                  ذو نكهة رائعة ومميزة.
                </p>
                <p className="max-w-[424px] leading-relaxed">
                  نحن واثقون من أنكم ستشعرون بالفرق الكبير في كل نكهة من زيت
                  الزيتون الفائق وزيتون المخلل اللذيذ الذي نقدمه بكل فخر
                  واهتمام. اكتشفوا طعمًا لا يُضاهى وقيمة غذائية عالية مع زيتونة.
                </p>
              </div>
            </article>
            <div className="relative aspect-square h-[32rem] w-[32rem] max-w-[75%] sm:max-w-full">
              {[
                {
                  src: "/images/5550.webp",
                  "data-intersection-observer-element": true,
                  "data-intersection-observer-on-intersect-add":
                    "-translate-x-[20%] -translate-y-[25%] rotate-[6deg] scale-50",
                },
                {
                  src: "/images/5550.webp",
                  "data-intersection-observer-element": true,
                  "data-intersection-observer-on-intersect-add":
                    "-translate-y-[5%] translate-x-[25%] rotate-[9deg] scale-50",
                },
                {
                  src: "/images/5550.webp",
                  "data-intersection-observer-element": true,
                  "data-intersection-observer-on-intersect-add":
                    "-translate-x-[5%] translate-y-1/4 rotate-12 scale-50",
                },
              ].map((item, itemIndex) => (
                <Image
                  key={itemIndex}
                  {...item}
                  width={500}
                  height={800}
                  alt=""
                  className={clsx(
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-transform delay-[0.7s] duration-700",
                  )}
                  data-intersection-observer-unobserve-after-intersect={true}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white text-slate-900">
          <div
            className={clsx(
              "max-w-main mx-auto flex gap-8 px-16 pb-36 pt-16",
              "flex-col items-center justify-center lg:flex-row lg:justify-between",
            )}
          >
            <div className="relative aspect-square h-[32rem] w-[32rem] max-w-[90%] sm:max-w-full">
              {[
                {
                  src: "/images/5550.webp",
                  "data-intersection-observer-element": true,
                  "data-intersection-observer-on-intersect-add":
                    "-translate-x-[20%] -translate-y-[25%] -rotate-[6deg] scale-50",
                },
                {
                  src: "/images/5550.webp",
                  "data-intersection-observer-element": true,
                  "data-intersection-observer-on-intersect-add":
                    "-translate-y-[5%] translate-x-[25%] -rotate-[9deg] scale-50",
                },
                {
                  src: "/images/5550.webp",
                  "data-intersection-observer-element": true,
                  "data-intersection-observer-on-intersect-add":
                    "-translate-x-[5%] translate-y-1/4 -rotate-12 scale-50",
                },
              ].map((item, itemIndex) => (
                <Image
                  key={itemIndex}
                  {...item}
                  width={500}
                  height={800}
                  alt=""
                  className={clsx(
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-transform delay-[0.7s] duration-700",
                  )}
                  data-intersection-observer-unobserve-after-intersect={true}
                />
              ))}
            </div>
            <article className="flex flex-col gap-6 text-xl">
              <h2 className="border-b-special-primary-500 w-fit border-b-[0.25rem] pb-4 text-4xl">
                أعلى كفائة
              </h2>
              <p className="max-w-[424px] leading-relaxed">
                نحن في مزرعة الزيتون &ldquo;زيتونة&rdquo; نعمل بكل اجتهاد وإخلاص
                لتقديم مجموعة متنوعة من المنتجات الزراعية ذات الجودة العالية.
                نسعى جاهدين لتلبية توقعاتكم وتقديم تجربة مميزة ترضي أذواقكم
                المتنوعة.
              </p>
            </article>
          </div>
        </section>
        <section
          className={clsx(
            "relative h-screen max-h-[60rem] min-h-[30rem] text-white",
          )}
          style={{
            backgroundImage: "url(/images/3443083.jpg)",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 h-full w-full bg-black/50 sm:bg-black/25" />
          <div
            className={clsx(
              "max-w-main relative mx-auto flex h-full w-full items-center px-16 py-36",
              "justify-center lg:justify-end",
            )}
          >
            <article
              className={clsx(
                "relative isolate flex scale-[0.05] flex-col gap-4 rounded-full text-xl",
                "origin-bottom-left transition-all duration-1000",
              )}
              data-intersection-observer-element={true}
              data-intersection-observer-on-intersect-remove="scale-[0.05]"
              data-intersection-observer-unobserve-after-intersect={true}
            >
              <div
                className={clsx(
                  "absolute inset-0 z-[-1] bg-black/50",
                  "aspect-square -translate-y-[20%] scale-125 rounded-full",
                  "hidden sm:block",
                )}
              />
              <h2 className="border-b-special-primary-500 w-fit border-b-[0.25rem] pb-4 text-4xl">
                محاصيل متنوعة
              </h2>
              <p className="max-w-[424px] leading-relaxed">
                وبالإضافة إلى الزيتون، نقوم أيضًا بزراعة بعض المحاصيل الأخرى
                لتنويع منتجاتنا. نحن نولي اهتمامًا كبيرًا لتطوير وتنمية هذه
                المحاصيل بنفس الاهتمام والحب الذي نوليه للزيتون. نحرص على اختيار
                أفضل الأصناف وتوفير العناية اللازمة لضمان جودة وكمية ممتازة.
              </p>
            </article>
          </div>
        </section>
        <section className="bg-white text-slate-900" id="product-sample">
          <div
            className={clsx(
              "max-w-main mx-auto flex gap-8 px-16 py-36",
              "flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between",
            )}
          >
            <article className="flex flex-col gap-6 text-xl">
              <h2 className="border-b-special-primary-500 w-fit border-b-[0.25rem] pb-4 text-4xl">
                منتجاتنا
              </h2>
            </article>
            <article
              className={clsx(
                "grid gap-x-16 gap-y-8",
                "grid-cols-1 md:grid-cols-2",
              )}
            >
              {[{ src: "/images/5550.webp" }, { src: "/images/5550.webp" }].map(
                (item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-special-primary-500 flex w-full max-w-[20rem] flex-col gap-2 overflow-hidden rounded-xl bg-opacity-5"
                  >
                    <div className="aspect-[9/16] h-[20rem] w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt=""
                        width={500}
                        height={500}
                        className={clsx(
                          "h-full w-full object-cover",
                          "scale-125",
                          "transition-transform delay-300 duration-500 ease-in-out",
                        )}
                        data-intersection-observer-element={true}
                        data-intersection-observer-on-intersect-remove="scale-125"
                        data-intersection-observer-unobserve-after-intersect={
                          true
                        }
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 px-4 pb-4 pt-2 text-center">
                      <h3>
                        <strong>Lorem ipsum</strong>
                      </h3>
                      <p>
                        dolor sit amet consectetur adipisicing elit. Eos
                        repudiandae reprehenderit quae quibusdam illo tenetur
                        expedita architecto maiores ratione.
                      </p>
                    </div>
                  </div>
                ),
              )}
            </article>
          </div>
        </section>
      </main>
      <footer className="bg-special-primary-500">
        <div className="max-w-main mx-auto flex items-center justify-between px-8 py-4">
          <Link href="/" title="home">
            <Image
              src="/images/Screen_Shot_2023-09-15_at_12.38.49_PM-removebg-preview.png"
              alt="zaytona logo"
              width={200}
              height={150}
              className="h-10 w-16"
            />
          </Link>

          <ul className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <li key={item.title}>
                <a
                  title={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener norefeer"
                  className="flex h-5 w-5 items-center justify-center"
                >
                  <item.children.Icon {...(item.children.props ?? {})} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
