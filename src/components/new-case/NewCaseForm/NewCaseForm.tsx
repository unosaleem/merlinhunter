import ContactUsForm from "@/components/home/contactus/ContactUsForm";

import { SendIcon } from "@/components/icons";
import { Checkbox } from "@/components/inputs";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
const NewCaseForm = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false); // Step 2

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        alternatePhone: "",
        question: [] as string[],
        message: "",
    });
    const handleCheckboxChange = (question: string) => {
        const updatedQuestions = [...formData.question];
        if (updatedQuestions.includes(question)) {
            updatedQuestions.splice(updatedQuestions.indexOf(question), 1);
        } else {
            updatedQuestions.push(question);
        }
        setFormData({ ...formData, question: updatedQuestions });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/new-case", formData);
            console.log(response.data);
            setIsLoading(false);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                alternatePhone: "",
                question: [] as string[],
                message: "",
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="pb-[50px] md:pb-[100px]">
            <div
                className="grid  lg:grid-cols-3 gap-[20px] bg-[#fff] rounded-[10px] border border-[#D8D8D8] py-[40px] md:py-[80px] px-[30px] md:px-[60px] "
            // data-aos="fade-down"
            // data-aos-duration="100"
            >
                <div className="flex flex-col gap-[20px] ">
                    <span
                        className="text-[16px] uppercase text-[#595959]"
                        data-aos="fade-right"
                        data-aos-duration="400"
                    >
                        Contact Us
                    </span>
                    {/* <div>
                  <h1
                     className=" text-[2rem] md:text-[2.8rem] font-bold inline-block "
                     data-aos="fade-right"
                     data-aos-duration="1000"
                  >
                     New Case
                     <span className="block h-[5px] mt-[-8px] bg-orange-600"></span>
                  </h1>
               </div> */}
                </div>

                <div
                    className="lg:col-start-2 lg:ps-[100px] lg:col-end-4"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                >
                    <div className="flex flex-col gap-[40px]  ">
                        <form className="grid gap-[20px]" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-[10px]">
                                <input
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                    placeholder="First Name"
                                    className="bg-transparent  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
                                />
                                <input
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                    placeholder="Last Name"
                                    className="bg-transparent  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
                                />
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="Email"
                                    name="email"
                                    className="bg-transparent  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
                                />{" "}
                                <input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    placeholder="Phone"
                                    name="phone"
                                    className="bg-transparent  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
                                />
                                {/* <input
                  id="alternatePhone"
                  type="tel"
                  value={formData.alternatePhone}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        alternatePhone: e.target.value,
                     })
                  }
                  placeholder="Phone"
                  name="phone"
                  className="bg-transparent col-span-2  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
               /> */}
                            </div>
                            <div
                                className="flex flex-col ps-[10px] gap-[20px]"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <label htmlFor="question" className="py-[12px] text-zinc-850r">
                                    {/* In Which Service You Have Questions? */}
                                    What best describes your situation?”
                                </label>
                                <div className="grid md:grid-cols-2 gap-[10px] px[10px]">
                                    <Checkbox
                                        title="Missing Person"
                                        isChecked={formData.question.includes("Missing Person")}
                                        onChange={() => handleCheckboxChange("Missing Person")}
                                    />
                                    <Checkbox
                                        title="Civil Disputes"
                                        isChecked={formData.question.includes("Civil Disputes")}
                                        onChange={() => handleCheckboxChange("Civil Disputes")}
                                    />
                                    <Checkbox
                                        title="Fraud Detection and Misconduct"
                                        isChecked={formData.question.includes(
                                            "Fraud Detection and Misconduct"
                                        )}
                                        onChange={() =>
                                            handleCheckboxChange("Fraud Detection and Misconduct")
                                        }
                                    />
                                    <Checkbox
                                        title="Other"
                                        isChecked={formData.question.includes("Other")}
                                        onChange={() => handleCheckboxChange("Other")}
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    id="message"
                                    type="tel"
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    value={formData.message}
                                    placeholder="Your Message"
                                    name="message"
                                    className="bg-transparent col-span-2  w-full border-b border-neutral-500 text-neutral-550 outline-none pt-[10px] py-[13px] px-[10px]  "
                                />
                            </div>

                            <motion.div
                                className="box"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 5 }}
                            >
                                <button
                                    type="submit"
                                    className="bg-orange-650 hover:bg-orange-700 flex items-center text-white gap-[10px] rounded-full px-[30px] py-[12px] border-black"
                                >
                                    {isLoading ? "Loading..." : "Get In Touch"} <SendIcon />
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCaseForm;
