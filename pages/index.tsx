import Head from "next/head";
import Image from "next/image";
import style from "@/styles/sass/home.module.scss";
import classNames from "classnames";
import ButtonOutline from "../src/components/ButtonOutline/index";
import BaseButton from "@/components/BaseButton";
import { CommunityInfo } from "@/components/CommunityInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <header
        className={classNames(
          style.header,
          "my-container d-flex justify-content-between"
        )}
      >
        <Image
          src="/assets/images/logo.svg"
          className={style["header__logo"]}
          width={172}
          height={30}
          alt="Site Logo"
        />

        <ButtonOutline className="d-none d-sm-block" title="Try free" />
      </header>

      <main>
        <section
          className={classNames(
            style["community-section"],
            "section",
            "my-container"
          )}
        >
          <div className="text-center">
            <h1>Build The Community Your Fans Will Love</h1>
            <p className={style["community-section__description"]}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <BaseButton
              large={true}
              title="Get Started For Free"
              rounded={true}
            />

            <Image
              src="/assets/images/screen-mockups.svg"
              alt="Computer Image"
              width={100}
              height={100}
              className={style["community-section__computer-image"]}
            />
          </div>

          <div className="d-flex flex-wrap justify-content-around">
            <CommunityInfo
              title="1.4k+"
              text="Communities Formed"
              iconUrl="/assets/images/icon-communities.svg"
            />
            <CommunityInfo
              title="2.7m+"
              text="Messages Sent"
              iconUrl="/assets/images/icon-messages.svg"
            />
          </div>
        </section>
        <section className="section section--background-1">
          <div className="row my-container align-items-center">
            <div className="col-xl-6 pe-5">
              <h1>Grow Together</h1>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on with a feedback form.{" "}
              </p>
            </div>
            <div className="mt-5 mt-xl-0  col-xl-6 d-flex justify-content-center">
              <div className="position-relative" style={{ width: "100%" }}>
                <Image
                  src="/assets/images/illustration-grow-together.svg"
                  alt="Grow Together"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  className="image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="row my-container align-items-center">
            <div className="col-xl-6 d-flex justify-content-center">
              <Image
                src="/assets/images/illustration-flowing-conversation.svg"
                alt="Grow Together"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                className="image"
              />
            </div>

            <div className="col-xl-6 ps-xl-5 mt-5 mt-xl-0 ">
              <h1> Flowing Conversations</h1>
              <p>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </div>
          </div>
        </section>
        <section className="section section--background-2">
          <div className="row my-container align-items-center">
            <div className="col-xl-6">
              <h1> Your Users</h1>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.{" "}
              </p>
            </div>
            <div className="mt-5 mt-xl-0 col-xl-6 d-flex justify-content-center">
              <Image
                src="/assets/images/illustration-your-users.svg"
                alt="Grow Together"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                className="image"
              />
            </div>
          </div>
        </section>

        <section className="section text-center">
          <h1 className="mb-5"> Ready To Build Your Community?</h1>

          <BaseButton
            large={true}
            title="Get Started For Free"
            rounded={true}
          />
        </section>
      </main>

      <footer className="footer">
        <div className="my-container row  justify-content-between">
          <div className="col-xl-4">
            <Image
              src="/assets/images/white-logo.svg"
              className={classNames("mb-4")}
              width={192}
              height={60}
              alt="Site Logo"
            />
            <p className="mb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="d-flex align-items-center mb-4">
              <Image
                src="/assets/images/icon-phone.svg"
                width={30}
                height={30}
                alt="Site Logo"
                className="icon"
              />
              <p className="ps-3 mb-0"> Phone: +1-543-123-4567</p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <Image
                src="/assets/images/icon-email.svg"
                width={30}
                height={30}
                alt="Site Logo"
                className="icon"
              />
              <p className="ps-3 mb-0"> example@huddle.com</p>
            </div>

            <div className="d-flex gap-3 footer__socials-container">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </div>
          </div>

          <div className="mt-5 mt-xl-0 col-xl-4">
            <h3>Newsletter</h3>
            <p className="mb-5">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address
            </p>
            <div className="d-flex flex-wrap gap-3">
              <input className="flex-grow-1 footer__input" type="text" />
              <BaseButton large={false} title="Subscribe" rounded={false} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
