import * as React from "react";
import ProcessStep from "./process/ProcessStep";

function ProcessSection() {
  // Sample data for process steps
  const processSteps = [
    {
      id: 1,
      icn:
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#095CFC"/>
      <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#095CFC"/>
      <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#B5CEFD"/>
      </svg>,
      title: "1. Ideate",
      description:
        "Turn your idea from concept to MVP Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante velit, suscipit non vestibulum sit amet, fermentum quis massa.",
    },
    {
      id: 2,
      icn:
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.9999 7.27272V1.45454C31.9999 1.06877 31.8467 0.698805 31.5739 0.426025C31.3011 0.153245 30.9311 0 30.5454 0H1.45454C1.06877 0 0.698804 0.153245 0.426024 0.426025C0.153245 0.698805 0 1.06877 0 1.45454V7.27272H31.9999Z" fill="#095CFC"/>
      <path d="M0 10.1818V30.5454C0 30.9312 0.153245 31.3012 0.426024 31.574C0.698804 31.8467 1.06877 32 1.45454 32H8.72725V10.1818H0Z" fill="#B5CEFD"/>
      <path d="M11.6364 32H30.5455C30.9312 32 31.3012 31.8467 31.574 31.574C31.8467 31.3012 32 30.9312 32 30.5454V10.1818H11.6364V32Z" fill="#095CFC"/>
      </svg>,
      title: "2. Design",
      description: "",
    },
    {
      id: 3,
      icn:
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.4857 0.293579C31.2286 1.11554e-06 30.7143 0 30.3286 0L23 2.49541V32L31.1 29.3578C31.6143 29.211 32 28.6239 32 27.8899V1.46789C32 1.02752 31.8714 0.587157 31.4857 0.293579Z" fill="#095CFC"/>
      <path d="M20 2.22222L12 0V29.7778L20 32V2.22222Z" fill="#B5CEFD"/>
      <path d="M9 0L0.900001 2.6422C0.385715 2.93578 0 3.52293 0 4.11009V30.5321C0 30.9725 0.128571 31.4128 0.514285 31.7064C0.771428 31.8532 1.02857 32 1.28571 32H1.67143L9 29.5046V0Z" fill="#095CFC"/>
      </svg>,
      title: "3. Develop",
      description: "",
    },
    {
      id: 4,
      icn:
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5556 13H1.44444C1.06135 13 0.693953 12.8478 0.423067 12.5769C0.152181 12.306 0 11.9386 0 11.5556V1.44444C0 1.06135 0.152181 0.693953 0.423067 0.423067C0.693953 0.152181 1.06135 0 1.44444 0H11.5556C11.9386 0 12.306 0.152181 12.5769 0.423067C12.8478 0.693953 13 1.06135 13 1.44444V11.5556C13 11.9386 12.8478 12.306 12.5769 12.5769C12.306 12.8478 11.9386 13 11.5556 13Z" fill="#095CFC"/>
      <path d="M11.5556 32H1.44444C1.06135 32 0.693953 31.8478 0.423067 31.5769C0.152181 31.306 0 30.9386 0 30.5556V20.4444C0 20.0614 0.152181 19.694 0.423067 19.4231C0.693953 19.1522 1.06135 19 1.44444 19H11.5556C11.9386 19 12.306 19.1522 12.5769 19.4231C12.8478 19.694 13 20.0614 13 20.4444V30.5556C13 30.9386 12.8478 31.306 12.5769 31.5769C12.306 31.8478 11.9386 32 11.5556 32Z" fill="#095CFC"/>
      <path d="M17 1H32V4H17V1Z" fill="#095CFC"/>
      <path d="M32 20H17V23H32V20Z" fill="#095CFC"/>
      <path d="M32 28H17V31H32V28Z" fill="#B5CEFD"/>
      <path d="M32 9H17V12H32V9Z" fill="#B5CEFD"/>
      </svg>,
      title: "4. Deploy",
      description: "",
    },
  ];

  return (
    <div className="flex flex-col items-start pb-20 pl-20 mt-20 w-full bg-black max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="z-10 self-center w-full max-w-[1305px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="text-xl font-semibold leading-9 text-indigo-400 max-md:max-w-full">
                Our Process
              </div>
              <div className="mt-9 text-5xl font-bold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                Our approach to reach
                <br />
                your business goals
              </div>
              {processSteps.map((step) => (
                <ProcessStep
                  key={step.id}
                  title={step.title}
                  description={step.description}
                  icn={step.icn}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start pt-20 w-full  max-md:mt-10 max-md:max-w-full">
              <img
                src="/prcimg.PNG"
                className="z-10 w-full aspect-[0.87] max-md:max-w-full"
                alt="Process Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
