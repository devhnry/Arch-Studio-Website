import arrow from "../assets/icons/icon-arrow-white.svg";
import {FieldValues, useForm} from "react-hook-form";
import {useEffect, useState} from "react";

import {motion as m} from "framer-motion"

export const ContactForm = () => {
	const formInfo: string[] = ['name', 'email', 'message']
	const errorStyle = "placeholder:opacity-75 placeholder:text-red border-b-red bg-opacity-75"

	const [isModalOpen, setIsModalOpen ] = useState(false);
	const {register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = (data: FieldValues) => {
		console.log(data)
		setIsModalOpen(true) }
	const closeModal = () => setIsModalOpen(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isModalOpen]);

	return (
		<>
		<m.form initial={{x: 300, opacity: 0.3}} viewport={{once: true}} whileInView={{x: 0, opacity: 1, transition: {
			duration: 0.6,
				delay: 0.15,
			}  }} onSubmit={handleSubmit(onSubmit)} className={`lg:mt-[4.125rem]`}>
			{formInfo.map((field) => field !== "message" ?
				(
					<div className={`relative`} key={field}>
					<input
						{...register(field, {required: true, minLength: field === "email" ? undefined : 3,
							pattern:
								field === "email"
									? {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Email regex
										message: "Invalid email address",
									}
									: undefined,
						})}
						placeholder={field}
						className={`input-style pb-14 ${errors[field]?.type === 'required' ? errorStyle : errors[field]?.type === 'minLength' ? errorStyle : errors[field]?.type === 'pattern' ? errorStyle : ''}`}
						/>
						{errors[field]?.type === 'required' && <p className={`absolute bottom-[8px] right-0 text-red`}>Can't be Empty</p>}
						{errors[field]?.type === 'minLength' && <p className={`absolute bottom-[30px] right-0 text-red`}>{field} is Short</p>}
						{errors[field]?.type === "pattern" && (
						<p className={`absolute bottom-[8px] right-0 text-red`}>Invalid email</p> )}
					</div>
				)
				: ( <div className={`relative h-fit`} key={field}>
						<textarea
						{...register(field, {required: true, minLength: 10})}

						placeholder={field}
						className={`input-style pb-14 ${errors[field]?.type === 'required' ? 'placeholder:opacity-75 placeholder:text-red border-b-red bg-opacity-75' : errors[field]?.type === 'minLength' ? 'placeholder:opacity-75 placeholder:text-red border-b-red bg-opacity-75' : ''}`}
						></textarea>
						{errors[field]?.type === 'required' && <p className={`absolute bottom-[30px] right-0 text-red`}>Can't be Empty</p>}
						{errors[field]?.type === 'minLength' && <p className={`absolute bottom-[30px] right-0 text-red`}>Message is Short</p>}
					</div> ))
			}
			<button type={"submit"} className={`bg-black p-4 -mt-[8.5px] block ml-auto`}>
				<span className={`sr-only`}>Submit</span>
				<img src={arrow} alt=""/>
			</button>
		</m.form>

		{isModalOpen && (
			<div onClick={closeModal} className="fixed z-30 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
				<div className="bg-white p-6 rounded-md text-center relative">
					<div className={`cursor-pointer absolute right-5 top-6`} onClick={closeModal}>
						<img src={`/src/assets/icons/icon-close.svg`} alt={``}/>
					</div>
					<div className={`p-10 pb-4 mt-4`}>
						<img className={`absolute left-4 top-4`} src={`/src/assets/icons/Arch-black.svg`} alt="Arch black"/>
						<img className={`size-28 mx-auto w-fit`} src={`/src/assets/icons/icon-mail.svg`} alt="Mail black"/>
						<h2 className="text-heading-s font-semibold">Thank You!</h2>
						<p className="mt-1">Your message has been sent successfully.</p>
					</div>
				</div>
			</div>
		)}
		</>
	);
};
