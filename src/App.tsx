import personalPhoto from "./assets/personal-photo.png";
import homelabImage from "./assets/homelab.png";
import interpreterLogo from "./assets/interpreter.png";
import openstackLogo from "./assets/openstack_logo.png";
import "./App.css";
import ImageTextBlock from "./components/ImageTextBlock";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function App() {
  const { ref: introRef, isIntersecting: introVisible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  const { ref: bioRef, isIntersecting: bioVisible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  const { ref: projectsRef, isIntersecting: projectsVisible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  const { ref: project1Ref, isIntersecting: project1Visible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  const { ref: project2Ref, isIntersecting: project2Visible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  const { ref: project3Ref, isIntersecting: project3Visible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  const { ref: aboutRef, isIntersecting: aboutVisible } =
    useIntersectionObserver({
      threshold: 0.1,
      triggerOnce: true,
    });

  return (
    <>
      <div 
        ref={introRef}
        className={`relative max-w-4xl mx-auto p-6 rounded-4xl overflow-hidden transition-all duration-1000 ease-out ${
          introVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-75 z-0 rounded-4xl"></div>
        <h1 className="relative text-1xl font-bold mb-8 text-center text-white">
          A Lifetime of Tech Experience
        </h1>
      </div>
      <br />
      <div 
        ref={bioRef}
        className={`relative max-w-4xl mx-auto p-6 rounded-4xl overflow-hidden transition-all duration-1000 ease-out ${
          bioVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-8 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-75 z-0 rounded-4xl"></div>
        <ImageTextBlock
          title="Words About Things I've Built"
          imageSrc={personalPhoto}
          imageAlt="Photo of me and my dog"
          imagePosition="left"
          text={`I’ve been in tech for more than 20 years now, starting as a teenager when a friend’s father gave me a book on Java 3. Since then I’ve been building, repairing, breaking and modding whatever I can get my hands on.\n\nI’ve had the opportunity to get my hands on lots of exciting things in my career. In my 5 years with Homeland Security Investigations as a contractor, I started out doing analytics on small datasets. As the project’s scope grew I moved into a software engineer role, working on several internal apps using Python and Java. As I became more interested in devops specifically, I started working on projects in a data engineer role, designing ingestion pipelines to extract, normalize, apply schemas and load into relational and non-relational databases using NiFi and Groovy.\n\nAfter leaving the federal government I’ve been working at a few different startups. I spent some time at a cryptocurrency finance startup, working in a hybrid role as a data analyst and devops. Then as a full time cloud engineer for a consulting company where I worked directly with stakeholders to extract requirements and create migration plans, deployed and maintained internal services, and designed solutions and infrastructure.`}
        />
      </div>
      <br />
      <br />
      <div
        ref={projectsRef}
        className="relative rounded-4xl max-w-4xl mx-auto p-6"
      >
        <div className="absolute inset-0 bg-black opacity-75 z-0 rounded-4xl"></div>
        <h2 className="relative text-4xl font-bold mb-8 text-center text-white">
          Projects
        </h2>
        <div
          ref={project1Ref}
          className={`transition-all duration-1000 ease-out ${
            project1Visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <ImageTextBlock
            title="Kubernetes Homelab"
            imageSrc={homelabImage}
            imageAlt="My homelab setup diagram"
            imagePosition="right"
            link="https://github.com/v1nsai/homelab"
            text="My Kubernetes powered home network that I share with some friends and family. It started out as wanting to practice Kubernetes and has turned into a (nearly) production-ready environment. It is deployed using flux CD gitops and includes a full logging, monitoring and alerting stack that emails me when issues come up, distributed Ceph based storage, high availability, loadbalancing, Nvidia GPU passthrough, reverse proxying through Cloudflare for public endpoints and several apps."
          />
        </div>
        <br />
        <div
          ref={project2Ref}
          className={`transition-all duration-1000 ease-out ${
            project2Visible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <ImageTextBlock
            title="OpenStack Deploy Tools"
            imageSrc={openstackLogo}
            imageAlt="OpenStack logo"
            imagePosition="left"
            link="https://github.com/v1nsai/deploy-tools"
            text="Terraform code and scripts to automate my personal project deployments to any OpenStack powered cloud provider. I ran some of my homelab projects in an OpenStack provider before switching over to fully self-hosting."
          />
        </div>
        <br />
        <div
          ref={project3Ref}
          className={`transition-all duration-1000 ease-out ${
            project3Visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <ImageTextBlock
            title="Telegram Interpreter Bot"
            imageSrc={interpreterLogo}
            imageAlt="Interpreter logo"
            imagePosition="right"
            link="https://github.com/v1nsai/the_interpreter_bot"
            text="A dockerized interpreter bot on the Telegram network that can be invited into group chats to translate everything the group says to/from English into your target language."
          />
        </div>
      </div>
      <br />
      <br />
      <div 
        ref={aboutRef}
        className={`relative rounded-4xl max-w-4xl mx-auto p-6 transition-all duration-1000 ease-out ${
          aboutVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-8 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-75 z-0 rounded-4xl"></div>
        <h2 className="relative text-4xl font-bold mb-8 text-center text-white">
          About Me
        </h2>
        <p className="relative text-white text-lg">
          Besides computer languages, I’m also a people languages enthusiast. I
          speak (Mexican) Spanish conversationally, which I use to get into
          confusing conversations with Hondurans and Salvadoreans here in DC. I
          play guitar and bass, and my wife and I love dancing even though we’re
          not very good at it.
        </p>
      </div>
      {/* Small text at the bottom of the page */}
      <div className="relative max-w-4xl mx-auto p-6">
        <div className="absolute inset-0 z-0"></div>
        <p className="relative text-white text-xs">
          © 2025 Drew's Personal Site, all pixels locally sourced and
          cruelty-free.
        </p>
      </div>
    </>
  );
}

export default App;
