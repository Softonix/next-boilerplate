'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'

export const SignUpForm: React.FC<{className?: string}> = (props) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  // const router = useRouter()
  const [customErrorMessage, setCustomErrorMessage] = useState<string | null>(null)

  function onSubmit (values: z.infer<typeof registerSchema>) {
    startTransition(() => {
      console.log(values)
      setCustomErrorMessage('Email is already used')
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('w-full',
        props.className
      )}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' disabled={isPending} placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='mt-3'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' disabled={isPending} placeholder="john@doe.com" {...field} />
              </FormControl>
              <FormMessage>
                {customErrorMessage}
              </FormMessage>
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
                  disabled={isPending}
                  showForgotPassword
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full mt-8' size='lg' disabled={isPending} type="submit">Continue</Button>

        <div className='flex items-center mt-12 justify-center w-full text-sm'>
          <p className='mr-2'>Already have an account?</p>

          <Link href='/auth/login' className='text-blue-400'>Login</Link>
        </div>
      </form>
    </Form>
  )
}
