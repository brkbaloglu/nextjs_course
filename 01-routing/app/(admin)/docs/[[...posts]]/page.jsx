import React from 'react';
import Link from 'next/link';

export default function PostPage({params}){
    return (<div>
        <Link href="hakkimizda">Hakkimizda</Link>
        <br />
        <Link href="/docs/post-1">Post-1</Link>
        <br />
        <Link href="/docs/post-1/post-2">Post-1/Post-2</Link>
        <br />
        <Link href={{pathname: "/hakkimizda", query: {name: "Next.js", surname: "ff",},}} className='test'>Object</Link>
    </div>)
}