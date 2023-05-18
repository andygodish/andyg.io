import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { techStackLogos } from '~/utils/techStack-logos';
import { TextSectionBody } from '~/components/TextSection/TextSectionBody/TextSectionBody';
import { TextSectionHeader } from '~/components/TextSection/TextSectionHeader/TextSectionHeader';



export default function Index() {
    return (
        <main className="min-h-screen 
          bg-warmGrey-100 dark:bg-darkAubergine-900">
            <div className="pt-32 px-5 m-auto 
              max-w-screen-xl">
                <TextSectionHeader textSize='text-4xl'>
                    Andy Godish
                </TextSectionHeader>
                <TextSectionBody isFlex={true} isLastSection={true} textSize='text-lg'>
                    ~$ &nbsp;
                    <Typewriter options={{ delay: 50 }} onInit={typewriter => {
                        typewriter.typeString('software developer')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('infra')
                            .deleteAll()
                            .typeString('cloud')
                            .deleteAll()
                            .typeString('devops engineer')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('personal website')
                            .start();
                    }} />
                </TextSectionBody>
                <TextSectionHeader textSize='text-3xl'>
                    About
                </TextSectionHeader>
                <TextSectionBody textAlign='text-justify' textSize='text-lg'>
                    After spending several years working in sports medicine as an Athletic Trainer, I made moved into the tech industry in 2018. At first, as a data analyst using Python to 
                    automate reporting and leverage vendor APIs. This initial experience laid the groundwork for my subsequent role as a full-stack web 
                    developer at a defense contracting firm, where I primarily utilized Node.js 
                </TextSectionBody> 
                <TextSectionBody textAlign='text-justify' textSize='text-lg'>
                    In this capacity, I gained invaluable exposure to Docker, Kubernetes, and a comprehensive selection of DevOps tools encompassed within 
                    <Link to={'https://p1.dso.mil/'} className="text-ubuntuOrange-700"> Platform One</Link>. I've since developed an interest
                    in all things containers and experimenting with open source technologies in my homelab and at work.
                </TextSectionBody>
                <TextSectionBody textAlign='text-justify' textSize='text-lg'>
                    Currently, I work as a DevOps Engineer. I am responsible for the development and maintenance of applications running both in the cloud and on-prem
                    infrastructure. My day to day consists of administering Kubernetes clusters, building CI/CD pipelines, managing IaC repositories using Terraform,
                    and writing Ansible scripts to manage server configurations.
                </TextSectionBody>
                <TextSectionBody isLastSection={true} textAlign='text-justify' textSize='text-lg'>
                    My plan is for this site to be a place to showcase personal projects and act as a resume of sorts.
                </TextSectionBody>
                <div className="pb-32">
                    <TextSectionHeader textSize='text-3xl'>
                        Tech Stack
                    </TextSectionHeader>
                    <TextSectionBody textSize='text-lg' textAlign='text-justify'>
                        While not a complete list, the following are some of the technologies I've worked with links to my own documented use cases written with my
                        self-hosted <Link to={'https://js.wiki/'} className="text-ubuntuOrange-700">Wiki.js</Link> instance. Future iterations of this app will
                        include a full integration of my Wiki.js instance. For now, the project is deployed to an RKE2 cluster running in my homelab. All links will
                        direct you to the markdown files stored in github.
                    </TextSectionBody>
                    <div className="mt-6 flex flex-wrap gap-8">
                        {techStackLogos.map((img) => (
                            <a
                                key={img.href}
                                href={img.href}
                                className="flex h-16 w-32 justify-center grayscale-[75%] hover:grayscale-0 transition-all"
                            >
                                <img alt={img.alt} src={img.src} className="object-contain text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}