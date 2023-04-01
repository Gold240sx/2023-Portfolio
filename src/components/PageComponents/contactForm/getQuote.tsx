import * as React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export default ({
    onSubmit,
    store,
}: {
    store: { test1: string; test2: string; test3: string }
    onSubmit: SubmitHandler<{ test1: string }>
}) => {
    const { handleSubmit, register } = useForm({
        defaultValues: store,
    })
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
                placeholder="form1"
                {...register("test1")}
                className="bg-gray-50"
            />
            <input
                type="submit"
                className="m-4 cursor-pointer rounded bg-pink-600 py-1 text-2xl text-white hover:bg-pink-500"
            />
        </form>
    )
}
