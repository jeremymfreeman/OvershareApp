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
import { useCreateComment } from '@/lib/react-query/queriesAndMutations'

const formSchema = z.object({
    comment: z.string().min(2, {
        message: "Comment must be at least 2 characters.",
    }).max(1000, {
        message: "Comment must be at most 1000 characters.",
    }),
})

const AddCommentForm = ({ postId }: { postId: string }) => {
    const { mutateAsync: createComment, isPending: isLoadingCreate } = useCreateComment();

    const navigate = useNavigate();
    const { user } = useUserContext();
    const { toast } = useToast();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const newComment = await createComment({
            content: values.comment,
            userId: user.id,
            postId: postId || "",
        })

        if (!newComment) {
            toast({
                title: 'Please try again',
            })
        }

        form.reset();

        navigate(`/posts/${postId}/comments`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shda-form_label">Comment</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Add a comment to this post.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="shad-button_primary whitespace-nowrap" disabled={isLoadingCreate}>
                    {isLoadingCreate && 'Loading...'}
                    Submit Comment
                </Button>
            </form>
        </Form>
    )
}

export default AddCommentForm