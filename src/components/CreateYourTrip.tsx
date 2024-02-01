"use client"
import Input from "./Input"
import Button from "./Button"
import useForm from "@/hooks/useForm"
import { useState } from "react"

const CreateYourTrip: React.FC = () => {
    const formStructure = {
        fullname: "",
        phone: "",
        email: "",
    }

    const [isSend, setIsSend] = useState(false);

    const { formState, onInputChange, onSubmit } = useForm(formStructure)

    const { fullname, phone, email} = formState

    return (
        <div className="bg-gradient-to-br from-zinc-800 to-sky-950 w-4/5 mx-auto mt-32 rounded-3xl relative p-10">
            <div className="w-2/4">
                <p className="text-xl text-zinc-400">¡Dejanos Crear Tu<br /><b className=" text-white text-5xl font-bold">Proxima Aventura!</b></p>
                <p className="text-sm text-zinc-400 mt-6">
                ¿Listo para embarcarte en una experiencia única? Proporcióna tus detalles y nos pondremos en contacto contigo para crear juntos tu próximo viaje. ¡Estamos aquí para hacer realidad la aventura de tus sueños!
                </p>
                <form className="mt-10" onSubmit={(e) => { onSubmit(e); setIsSend(true) }}>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        <div className="col-span-2">
                            <Input label="Nombres y Apellidos" type="text" name="fullname" value={fullname} onChange={onInputChange} required={true} />
                        </div>
                        <div className="col-span-1">
                            <Input label="Celular" type="tel" name="phone" value={phone} onChange={onInputChange} required={true} />
                        </div>
                        <div className="col-span-1">
                            <Input label="E-mail" type="mail" name="email" value={email} onChange={onInputChange} required={true} />
                        </div>
                    </div>
                    <p className="text-center mt-6 text-sky-200">{isSend ? "¡Tus datos se han enviado correctamente!" : ""}</p>
                    <div className="mt-6 text-right">
                        <Button type="submit" text="Enviar" mainButton={true} />
                    </div>
                </form>
            </div>
            <img src="./woman-travel.png" className="w-[18.5rem] bottom-0 right-32 absolute" alt="Travel Woman" />
        </div>
    )
}

export default CreateYourTrip