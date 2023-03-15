import { Fragment } from "react"
import { Tab } from "@headlessui/react"
import IrondalePhoto from "../../assets/Images/Irondale.jpg"
import PerpichPhoto from "../../assets/Images/Perpich.jpeg"
import ArtCenterPhoto from "../../assets/Images/ArtCenter.jpeg"
import CCSPhoto from "../../assets/Images/CCS.jpg"

const tabs = [
    {
        name: "High School",
        features: [
            {
                name: "Irondale High School",
                years: "2004-2006",
                location: "New Brighton, MN",
                description: "General Education - Freshman and Softmore years",
                imageSrc: IrondalePhoto,
                degree: "",
                imageAlt: "Irondale High School",
            },
            {
                name: "Perpich Center for Arts Education",
                years: "2006-2008",
                location: "Golden Valley, MN",
                description: `Visual Arts Major - Junior and Senior years.`,
                imageSrc: PerpichPhoto,
                degree: "High School Diploma 2008",
                imageAlt: "Irondale High School",
            },
        ],
    },
    {
        name: "College",
        features: [
            {
                name: "College For Creative Studies",
                years: "2004",
                location: "Detroit, MI",
                description: "Transportation Design Summer Program",
                imageSrc: CCSPhoto,
                degree: "Transportation Design Certificate and Credit",
                imageAlt: "College For Creative Studies",
            },
            {
                name: "Art Center College of Design",
                years: "2014",
                location: "Pasadena, CA",
                description: `Transportation Design Major`,
                imageSrc: ArtCenterPhoto,
                imageAlt: "Art Center College of Design",
            },
        ],
    },
    {
        name: "Certificates",
        features: [
            {
                name: "U",
                description:
                    "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg",
                imageAlt:
                    "Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.",
            },
        ],
    },
    {
        name: "On my list to learn",
        features: [
            {
                name: "Everything you'll need",
                description:
                    "The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.",
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg",
                imageAlt:
                    "Walnut organizer system on black leather desk mat on top of white desk.",
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Education = () => {
    const defaultTabIndex = tabs.findIndex(
        (tab) => tab.name === "Continued Education"
    )

    return (
        <div className="mb-10 w-full rounded-3xl bg-white dark:bg-slate-800">
            <section
                aria-labelledby="features-heading"
                className="mx-auto py-32 sm:px-2 lg:px-8"
            >
                <div className="mx-auto px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h3 className="relative  z-50 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                            Education
                        </h3>
                        <p className="mt-4 text-gray-500">
                            Always Learning, Always Growing
                        </p>
                    </div>

                    <Tab.Group
                        as="div"
                        className="mt-4"
                        defaultIndex={defaultTabIndex}
                    >
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? "border-sky-500 text-sky-600"
                                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                                    "whitespace-nowrap border-b-2 border-t-transparent border-l-transparent border-r-transparent py-6 text-sm font-medium"
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel
                                    key={tab.name}
                                    className="space-y-16 pt-10 lg:pt-16"
                                >
                                    {tab.features.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                                        >
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    {feature.name}
                                                </h3>
                                                {feature.years && (
                                                    <h4 className="text-base font-medium text-gray-600">
                                                        {feature.years} |{" "}
                                                        {feature.location}
                                                    </h4>
                                                )}{" "}
                                                {feature.degree && (
                                                    <p className="text-sm font-medium text-gray-600">
                                                        {feature.degree}
                                                    </p>
                                                )}
                                                <p className="mt-2 text-sm text-gray-500">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                                                    <img
                                                        src={feature.imageSrc}
                                                        alt={feature.imageAlt}
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    )
}

export default Education
