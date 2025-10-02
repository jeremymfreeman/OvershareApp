import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useUserContext } from '@/context/AuthContext'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'
import { useCreateMessage } from '@/lib/react-query/queriesAndMutations'


const formSchema = z.object({
    message: z.string().min(2, {
        message: "Comment must be at least 2 characters.",
    }).max(1000, {
        message: "Comment must be at most 1000 characters.",
    }),
})

const AddMessageForm = () => {

    const { mutateAsync: createMessage, isPending: isLoadingCreate } = useCreateMessage();

    const navigate = useNavigate();
    const { user } = useUserContext();
    const { toast } = useToast();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const newComment = await createMessage({
            content: values.message,
            userId: user.id,
        })

        if (!newComment) {
            toast({
                title: 'Please try again',
            })
        }

        form.reset();

        navigate(`/messaging`);
    }
  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shda-form_label">Message</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Add your thoughts to the discussion.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="shad-button_primary whitespace-nowrap" disabled={isLoadingCreate}>
                    {isLoadingCreate && 'Loading...'}
                    Send Message
                </Button>
            </form>
        </Form>
  )
}

export default AddMessageForm