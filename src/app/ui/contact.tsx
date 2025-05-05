import { Mail } from "lucide-react"
import { Card } from "./componenets/card"

export function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center w-full shrink-0 sm:p-20 p-5 bg-[#F9FAFB]">
            <h1 className="text-[30px] sm:mb-12 mb-5">Get In Touch</h1>
            <div className="w-full md:w-3/5">
                <Card bgColor="bg-white">
                    <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-2.5 w-full">
                        <div className="flex flex-row items-center sm:gap-4 gap-1.5">
                            <Mail color="#2563EB" width={38}></Mail>
                            <div className="flex flex-col">
                                <h3 className="font-bold">Email</h3>
                                <p className="text-[#4B5563]">ariya17duta@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center sm:gap-4 gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38px" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                            <div className="flex flex-col">
                                <h3 className="font-bold">GitHub</h3>
                                <a className="text-[#4B5563]" href="https://github.com/Ariyalex" target="_blank">github.com/Ariyalex</a>
                            </div>
                        </div>
                    </div>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="flex flex-col gap-5 mt-5"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="00bbb986-ce3a-4d70-8787-5cedb48c8969"
                        />
                        <input
                            className="border-[2px] border-[#D1D5DB] rounded-md p-2 focus:outline-none focus:border-gray-900"
                            type="text"
                            name="name"
                            placeholder="Your Name" required />
                        <input
                            className="border-[2px] border-[#D1D5DB] rounded-md p-2 focus:outline-none focus:border-gray-900"
                            type="email"
                            name="email"
                            placeholder="Your Email" required />
                        <textarea
                            className="border-[2px] border-[#D1D5DB] rounded-md p-2 focus:outline-none focus:border-gray-900 resize-none"
                            name="message"
                            placeholder="Your Message" required />
                        <button type="submit" className="bg-[#2563EB] text-white rounded-lg py-3">Send Message</button>
                    </form>
                </Card>
            </div>

        </div>
    )
}