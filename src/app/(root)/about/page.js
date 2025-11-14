import Aurora from "@/components/Aurora";

const About = async () => {
  return (
    <div className=" h-screen w-screen">
      <Aurora
        colorStops={["#7cfd68", "#b19eef", "#5227ff"]}
        blend={0.5}
        amplitude={0.5}
        speed={0.5}
      />
    </div>
  );
};

export default About;

// async function getData() {
//   await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
//   return { content: "About page content" };
// }

// export default async function About() {
//   const data = await getData();

//   return (
//     <div className="min-h-screen p-8">
//       <h1 className="text-4xl font-bold">About Page</h1>
//       <p className="mt-4 text-lg">{data.content}</p>
//     </div>
//   );
// }
