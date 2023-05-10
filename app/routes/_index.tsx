import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { techStackLogos } from '~/utils/techStack-logos';

export default function Index() {
    return (
        <main className="min-h-screen 
          bg-warmGrey-100 dark:bg-darkAubergine-900 
          text-ubuntuOrange-700">
            <div className="pt-32 px-5 m-auto 
              max-w-screen-xl
              text-4xl \
              font-bold">
                <div className="mb-2">
                    Andy Godish
                </div>
                <div className="text-lg dark:text-canonicalAubergine-400 text-darkAubergine
                  font-light 
                  flex
                  mb-16">
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
                </div>
                <div className='text-3xl 
                  mb-4'>
                    About
                </div>
                <div className='text-lg dark:text-canonicalAubergine-400 text-darkAubergine text-justify
                  mb-4
                  font-light'>
                    After spending several years in sports medicine, I moved into the tech field in 2018 - at first, writing Python scripts and performing 
                    some basic scripting. I was eventually able to parlay this experience into a full stack web development position at a small defense
                    contractor, working primarily with Node.js. It was in this role that I got exposure to Docker, Kubernetes, and an entire suite of DevOps tools 
                    that comprised <Link to={'https://p1.dso.mil/'} className="text-ubuntuOrange-700">Platform One. </Link> I have since developed an interest 
                    in all things containers and continuously experimenting with open source technologies in my homelab and at work.
                </div>
                <div className='text-lg dark:text-canonicalAubergine-400 text-darkAubergine text-justify 
                mb-4
                font-light'>
                    Currently, I work as a DevOps Engineer in Colorado where I am responsible for the development and maintenance of applications 
                    running both in the cloud and on-prem infrastructure. My day to day consists of administering Kubernetes clusters, building 
                    CI/CD pipelines, managing IaC repositories using Terraform, and using Ansible to manage server configurations. 
                </div>
                <div className='text-lg dark:text-canonicalAubergine-400 text-darkAubergine text-justify 
                mb-16
                font-light'>
                    My plan is to use this site as a resume of sorts. I'll continue to integrate additional open source services to my production environment. 
                </div>
                <div className="pb-32">
                    <div className='text-3xl text-center mb-4'>
                        Tech Stack
                    </div>
                    <div className=" mt-6 flex flex-wrap justify-center gap-8">
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