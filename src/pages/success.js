import Link from "next/link"

export default function Success(){
    return <div className="successdiv">
        <h1>
            Thanks for your message
        </h1>

        <h2>
            I will get back to you shortly !!
        </h2>

        <br></br>
        <br></br>

        <Link href="/">
            <button id="button">
                Return Home
            </button>
        </Link>

        <br></br>
        <br></br>

        <Link href="https://sites.google.com/view/nwankwovictory">
            <button id="button1">
                Read A Book
            </button>
        </Link>
        
    </div>
}