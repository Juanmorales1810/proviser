import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Define el esquema de validación
const quotationSchema = z.object({
    name: z
        .string()
        .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    lastName: z
        .string()
        .min(2, { message: "El apellido debe tener al menos 2 caracteres." }),
    company: z
        .string()
        .min(1, { message: "Por favor, ingrese el nombre de la empresa." }),
    email: z
        .string()
        .email({ message: "Dirección de correo electrónico inválida." }),
    product: z
        .string()
        .min(1, { message: "Por favor, seleccione un producto o servicio." }),
    message: z
        .string()
        .min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type QuotationFormValues = z.infer<typeof quotationSchema>;

export default function Form() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<QuotationFormValues>({
        resolver: zodResolver(quotationSchema),
        defaultValues: {
            name: "",
            lastName: "",
            company: "",
            email: "",
            product: "",
            message: "",
        },
    });

    const onSubmit = (data: QuotationFormValues) => {
        console.log(data);
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        Nombre
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <Input id="name" {...field} />}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="lastName"
                        className="block text-sm font-medium"
                    >
                        Apellido
                    </label>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <Input id="lastName" {...field} />
                        )}
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <label htmlFor="company" className="block text-sm font-medium">
                    Empresa
                </label>
                <Controller
                    name="company"
                    control={control}
                    render={({ field }) => <Input id="company" {...field} />}
                />
                {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.company.message}
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium">
                    Correo Electrónico
                </label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input id="email" {...field} />}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="product" className="block text-sm font-medium">
                    Producto o Servicio de Interés
                </label>
                <Controller
                    name="product"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    aria-label="Abrir menú"
                                    placeholder="Seleccione un producto o servicio"
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mineria">Minería</SelectItem>
                                <SelectItem value="construccion">
                                    Construcción
                                </SelectItem>
                                <SelectItem value="agricola">
                                    Agricola
                                </SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.product && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.product.message}
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium">
                    Mensaje
                </label>
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => <Textarea id="message" {...field} />}
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <Button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 transition-colors"
            >
                Enviar Cotización
            </Button>
        </form>
    );
}
