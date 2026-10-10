import Image from "next/image";
function Main() {
  return (
    <div className=" bg-[url('/main/banner.png')] bg-cover bg-center h-64 flex items-center justify-center">
      <h1 className="text-3xl text-[red] text-center">This is our heading</h1>
      {/* <Image src="/main/banner.png" alt="Description of the image" width={300} height={200} /> */}
    </div>
  )
}

export default Main;