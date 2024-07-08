'use client'
import { CheckIcon } from "lucide-react"
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import fadein from "@/lib/Varriants";
const Planes = () => {
    const Planes = [
        {
            id: 1,
            name: "Basic",
            price: 10,
            features: [
                {
                    name: "5 Classes",
                    icon: <CheckIcon color="green" />
                },
                {
                    name: "Include membership",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Group Training",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Diet plan",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Exercise plan and Videos",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Weekly Video Call",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Access to All Gym Facilities",
                    icon: <CloseIcon color="red" />
                },
                {
                    name: "Health and Fitness Tracking",
                    icon: <CloseIcon color="red" />   
                },
                {
                    name: "Personal Trainer",
                    icon: <CloseIcon color="green" />
                }
            ]
        },
        {
            id: 3,
            name: "Premium",
            price: 30,
            features: [
                {
                    name: "7 Classes",
                    icon: <CheckIcon color="green" />
                },
                {
                    name: "Personal Trainer",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Group Training",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "include membership",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Diet and Exercise plan",  
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Exercise plan and Videos",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "every 5 days Video Call",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Access to All Gym Facilities",
                    icon: <CheckIcon color="green" />
                },
                {
                    name: "Health and Fitness Tracking",
                    icon: <CheckIcon color="green" />   
                },
            ]
        },
        {
            id: 2,
            name: "Standard",
            price: 20,
            features: [
                {
                    name: "6 Classes",
                    icon: <CheckIcon color="green" />
                },
                {
                    name: "Personal Trainer",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Group Training",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "include membership",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Diet plan",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Exercise plan and Videos",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Weekly Video Call",
                    icon: <CheckIcon color="green" />   
                },
                {
                    name: "Access to All Gym Facilities",
                    icon: <CloseIcon color="red" />   
                },
                {
                    name: "Health and Fitness Tracking",
                    icon: <CloseIcon color="red" />   
                },
            ]
        }
    ]
    return (
        <div className="w-full min-h-[90vh] bg-secondary p-[50px] bg-cover bg-no-repeat bg-center" id="planes">
            <div className="container mx-auto">
                <motion.div variants={fadein("up", 0.4)} initial={"hidden"} whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="text-center flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-accent">Membership Plans</h1>
                    <p className="text-2xl text-primary">Choose Your Membership Plan and start your fitness journey</p>
                </motion.div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full my-[4.5rem]">
                    {
                        Planes.map((plan) => {
                            return (
                                <motion.div variants={fadein("down", 0.4)} initial={"hidden"} whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className={`flex flex-col items-start gap-8 p-4 rounded-lg bg-transparent border-accent border-[1px] relative w-[100%] ${plan.id === 3 ? "scale-105 shadow-[0_0_10px_0_#fca311]" : ''} `} key={plan.id}>
                                    <h1 className="text-3xl font-bold text-accent">{plan.name}</h1>
                                    <p className="text-2xl font-bold text-primary"><span className="text-5xl font-extrabold text-[#fca311]">${plan.price}</span>/ month</p>
                                    <ul className="flex flex-col gap-5">
                                        {
                                            plan.features.map(feature => {
                                                return (
                                                    <li className="flex items-center gap-2" key={feature.name}>
                                                        <span>{feature.icon}</span>
                                                        <p>{feature.name}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button className="bg-accent text-white mx-auto flex items-center justify-center p-5 font-bold rounded-lg mt-5 w-[100%]">Get Started</button>
                                    {
                                        plan.id == 3 ? <span className="text-2xl font-bold uppercase bg-accent text-secondary w-[200px] px-4 py-2 rounded-lg absolute top-[-30px] right-[27%] hidden lg:block">Recommended</span> : ""
                                    }
                                    
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Planes