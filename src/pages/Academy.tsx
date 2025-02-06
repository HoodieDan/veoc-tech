import { ArrowForward } from "@mui/icons-material";
import AIOnBricks from "../assets/images/pngs/ai-on-bricks.png";
import developer from "../assets/images/pngs/developer.png";
import ManWithBooksAvatar from "../assets/images/pngs/man-with-books-avatar.png";
import ManWorkinfTheServer from "../assets/images/pngs/man-working-the-server.png";
import TwoWomenOneLaptop from "../assets/images/pngs/two-women-one-laptop.png";
import WomanAvatar from "../assets/images/pngs/woman-avatar.png";
import WomanLeanOnWall from "../assets/images/pngs/woman-lean-on-wall.png";

const COURSES = [
  "Software Engineering",
  "Product Management",
  "Product Design",
  "Data Analysis",
] as const;
// const FOOTER_LINKS = [
//   {
//     category: "Services",
//     links: [
//       { label: "Blog", href: "" },
//       { label: "Case Studies", href: "" },
//       { label: "Academy", href: "/academy" },
//     ],
//   },
//   {
//     category: "Company",
//     links: [
//       { label: "About Us", href: "" },
//       { label: "Events", href: "" },
//       { label: "Community", href: "" },
//       { label: "Careers", href: "" },
//     ],
//   },
//   {
//     category: "Contact Us",
//     links: [
//       { label: "Feel free to get in touch with us", href: null },
//       { label: "Nigeria: +234 123 456 789", href: "" },
//       { label: "partnerships@enyata.com", href: "" },
//     ],
//   },
// ] as const;

const Academy = () => {
  return (
    <div className="academy">
      <section className="academy__hero">
        <div className="academy__hero__left">
          <h1>
            Empowering young
            <br /> Tech Enthusiast
            <br /> with the <span className="purple"> skills to
            <br /> create a better
            <br /> future </span>
          </h1>
          <p>
            The Veoc Tech academy is dedicated to sparking the fire
            <br /> of learning in the next generation
          </p>
          <a href="" title="Apply Now" className="mt-1">
            Apply Now
          </a>
        </div>
        <div className="academy__hero__right">
          <img
            src={TwoWomenOneLaptop}
            alt="Two women one laptop"
            className="img-fluid"
          />
        </div>
      </section>
      <section className="academy__section-one">
        <div className="academy__section-one__top">
          <div>
            <h2>
              Learn from the best and stand a chance to 
              <br /> work towards <span className="purple"> becoming an expert in 
              <br /> your chosen field </span>
            </h2>
            <p>
              Join a growing community of technologists learning and
              <br /> building skillsets that will power the innovations of
              <br /> the future.
            </p>
          </div>
          <div>
            {COURSES.map((course) => (
              <button key={course} className="text-nowrap">
                {course}
              </button>
            ))}
          </div>
        </div>
        <div className="academy__section-one__bottom">
          <div>
            <h4>
              Java Programming and Software
              <br /> Engineering
            </h4>
            <p>
              Take your first step towards a career in software
              <br /> development with this introduction to Java- one of the most
              <br /> in-demand programming languages and the foundation of
              <br /> the Android operating system.
            </p>
            <p>
              Designed for beginners, this specialization will teach you core
              <br /> programming concepts and equip you to write programs to
              <br /> solve complex problems.
            </p>
          </div>
          <div>
            <img
              src={developer}
              alt="developer writing code"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
      <section className="academy__section-two">
        <div className="academy__section-two__top">
          <h2>
            We&apos;re building talents for the future with 
            <br /> those who have passion to create it
          </h2>
          <p>
            Academy intakes are trained and mentored for six weeks by our
            <br /> experienced team members after which they are given the
            <br /> opportunity to gain experience on real projects
          </p>
        </div>
        <div className="academy__section-two__bottom">
          <div>
            <img
              src={WomanLeanOnWall}
              alt="Woman leaning on a wall"
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={ManWorkinfTheServer}
              alt="Man working the server"
              className="img-fluid"
            />
          </div>
          <div>
            <img src={AIOnBricks} alt="AI on bricks" className="img-fluid" />
          </div>
        </div>
      </section>
      <section className="academy__section-three">
        <div className="academy__section-three__left">
          <h1>
            Enroll to stand a chance to get our
            <br /> limited time only learning experience 
            <br /> (0 experience needed)
          </h1>
          <a
            href=""
            title="Get started"
            className="academy__section-three__left__cta"
          >
            <div>
              <span>Get started</span>
              <ArrowForward className="academy__section-three__left__cta__arrow" />
            </div>
          </a>
        </div>
      </section>
      <section className="academy__section-four">
        <h1>
          What students are saying
          <br /> about the academy
        </h1>
        <div className="academy__section-four__testimonials">
          <div className="academy__section-four__testimonials__testimonial">
            <div className="academy__section-four__testimonials__testimonial__header">
              <img src={WomanAvatar} alt="Woman avatar" className="img-fluid" />
              <div>
                <span className="fw-semibold">Cynthia Ilomeje</span>
                <span>Frontend Engineer</span>
              </div>
            </div>
            <p className="fw-medium">
              “I was a microbiology graduate with no prior knowledge of anything
              software development when I started, I now and have been working
              as a Software Engineer where I develop scalable web applications
              thanks to the training I got in the academy.”
            </p>
          </div>
          <div className="academy__section-four__testimonials__testimonial">
            <div className="academy__section-four__testimonials__testimonial__header">
              <img
                src={ManWithBooksAvatar}
                alt="Man with books avatar"
                className="img-fluid"
              />
              <div>
                <span className="fw-semibold">Michael Adisa</span>
                <span>Frontend Engineer</span>
              </div>
            </div>
            <p className="fw-medium">
              “Enyata academy promised to give a roadmap to build a successful
              career and teach necessary skills to get started on that path, in
              four months and they did. I am now a Software Engineer specialised
              in frontend development.”
            </p>
          </div>
        </div>
      </section>
      {/* <footer className="academy__footer">
        <div className="academy__footer__top">
          <h1>
            What will you
            <br /> Build today?
          </h1>
          <p>
            Leverage our world class engineering teams to get your
            <br /> ideas and projects up and running quickly.
          </p>
          <a href="" title="Let's talk">
            Let&apos;s talk
          </a>
        </div>
        <div className="academy__footer__categories">
          {FOOTER_LINKS.map(({ category, links }) => (
            <div
              className="academy__footer__categories__category"
              key={category}
            >
              <span className="fw-semibold">{category}</span>
              {links.map(({ label, href }, index) =>
                href !== null ? (
                  <a href={href} title={label} key={index}>
                    <span>{label}</span>
                  </a>
                ) : (
                  <span key={index}>{label}</span>
                )
              )}
            </div>
          ))}
        </div>
      </footer> */}
    </div>
  );
};

export default Academy;
