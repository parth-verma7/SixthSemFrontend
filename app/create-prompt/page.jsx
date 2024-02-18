'use client'
import React from 'react'
import {useState} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'

import Form from '../../components/Form'

const CreatePrompt = () => {
    const router=useRouter();
    const {data:session} = useSession();
    const [submitting, setsubmitting] = useState(false);
    const [post,setpost] = useState({
        prompt:'',
        tag:'',
    });
    const createPrompt =async(e)=>{
        e.preventDefault();
        setsubmitting(true);
        try{
            const response = await fetch('api/prompt/new',{
                method:'POST',
                
                body:JSON.stringify({
                    prompt:post.prompt,
                    userId:session?.user.id,
                    tag:post.tag
                })
            })
            if(response.ok){
                router.push('/')
            }
        }
        catch(error){
            console.log(error);
        }
        finally{
            setsubmitting(false);
        }
    }
  return (
    <>
    {session?.user ? ( // If session.user exists
    <Form 
        type="Create"
        post={post}
        setpost={setpost}
        submitting={setsubmitting}
        handleSubmit={createPrompt}
    />
) : ( // If session.user does not exist
    <h1 className='text-3xl'><strong>sign in to view this page</strong></h1>
)}

    </>
    
  )
}

export default CreatePrompt