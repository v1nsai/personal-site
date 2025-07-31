import personalPhoto from "./assets/personal-photo.png";
import homelabImage from "./assets/homelab.png";
import interpreterLogo from "./assets/interpreter.png";
import openstackLogo from "./assets/openstack_logo.png";
import "./App.css";
import ImageTextBlock from "./components/ImageTextBlock";

function App() {
  return (
    <>
      <div className="relative max-w-4xl mx-auto p-6">
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <h1 className="relative text-1xl font-bold mb-8 text-center text-white">
          A Lifetime of Tech Experience
        </h1>
      </div>
      {Array.from({ length: 10 }, () => (
        <br />
      ))}
      <ImageTextBlock
        title="Words About Things I've Built"
        imageSrc={personalPhoto}
        imageAlt="Photo of me and my dog"
        imagePosition="left"
        text={`I’ve been in tech for more than 20 years now, starting as a teenager when a friend’s father gave me a book on Java 3. Since then I’ve been building, repairing, breaking and modding whatever I can get my hands on.\n\nI’ve had the opportunity to get my hands on lots of exciting things in my career. In my 5 years with Homeland Security Investigations as a contractor, I started out doing analytics on small datasets. As the project’s scope grew I moved into a software engineer role, working on several internal apps using Python and Java. As I became more interested in devops specifically, I started working on projects in a data engineer role, designing ingestion pipelines to extract, normalize, apply schemas and load into relational and non-relational databases using NiFi and Groovy.\n\nAfter leaving the federal government I’ve been working at a few different startups. I spent some time at a cryptocurrency finance startup, working in a hybrid role as a data analyst and devops. Then as a full time cloud engineer for a consulting company where I worked directly with stakeholders to extract requirements and create migration plans, deployed and maintained internal services, and designed solutions and infrastructure.`}
      />
      <br />
      <br />
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <h2 className="relative text-4xl font-bold mb-8 text-center text-white">
          Projects
        </h2>
      </div>
      <ImageTextBlock
        title="Kubernetes Homelab"
        imageSrc={homelabImage}
        imageAlt="My homelab setup diagram"
        imagePosition="right"
        link="https://github.com/v1nsai/homelab"
        text="My Kubernetes powered home network that I share with some friends and family. It started out as wanting to practice Kubernetes and has turned into a (nearly) production-ready environment. It is deployed using flux CD gitops and includes a full logging, monitoring and alerting stack that emails me when issues come up, distributed Ceph based storage, high availability, loadbalancing, Nvidia GPU passthrough, reverse proxying through Cloudflare for public endpoints and several apps."
      />
      <ImageTextBlock
        title="OpenStack Deploy Tools"
        imageSrc={openstackLogo}
        imageAlt="OpenStack logo"
        imagePosition="left"
        link="https://github.com/v1nsai/deploy-tools"
        text="Terraform code and scripts to automate my personal project deployments to any OpenStack powered cloud provider. I ran some of my homelab projects in an OpenStack provider before switching over to fully self-hosting."
      />
      <ImageTextBlock
        title="Telegram Interpreter Bot"
        imageSrc={interpreterLogo}
        imageAlt="Interpreter logo"
        imagePosition="right"
        link="https://github.com/v1nsai/the_interpreter_bot"
        text="A dockerized interpreter bot on the Telegram network that can be invited into group chats to translate everything the group says to/from English into your target language."
      />
      <br />
      <br />
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <h2 className="relative text-4xl font-bold mb-8 text-center text-white">
          About Me
        </h2>
      </div>
      <div className="relative max-w-4xl mx-auto p-6 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
        <p className="relative text-white text-lg">
          Besides computer languages, I’m also a people languages enthusiast. I
          speak (Mexican) Spanish conversationally, which I use to get into
          confusing conversations with Hondurans and Salvadoreans here in DC. I
          play guitar and bass, and my wife and I love dancing even though we’re
          not very good at it.
        </p>
      </div>
    </>
  );
}

export default App;
