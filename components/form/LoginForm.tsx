'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'

export const LoginForm: React.FC<{className?: string}> = (props) => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // const router = useRouter()
  const [customErrorMessage, setCustomErrorMessage] = useState<string | null | undefined>(null)

  const mutation = trpc.auth.signIn.useMutation()

  async function onSubmit (values: z.infer<typeof loginSchema>) {
    console.log(values)
    console.log('ERROR: ', mutation.error?.message)
    setCustomErrorMessage(mutation.error?.message)
    await mutation.mutateAsync(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('w-full',
        props.className
      )}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' disabled={mutation.isPending} placeholder="john@doe.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='mt-3'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  type='password'
                  disabled={mutation.isPending}
                  showForgotPassword
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {mutation.isError && (
          <FormMessage>
            {customErrorMessage}
          </FormMessage>
        )}

        <Button className='w-full mt-8' size='lg' disabled={mutation.isPending} type="submit">Continue</Button>

        <div className='flex items-center mt-12 justify-center w-full text-sm'>
          <p className='mr-2'>Don`t have an account yet?</p>

          <Link href='/auth/sign-up' className='text-blue-400'>Sign up</Link>
        </div>
      </form>
    </Form>
  )
}
