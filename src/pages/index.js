import Hero from "@/Components/Hero";
import ProjectSlider from "@/Components/ProjectSlider";
import Section from "@/Components/Section";

const data = [
  {
    link: "/",
    img: "/Ancient Roman architecture.jpg",
    title: "CASE Study 001",
    mainTitle:
      "MK: How can we fix non-functional elements, responsiveness, and user interaction issues?",
    tags: ["UX Research", "Ui Design", "Prototyping"],
  },
  {
    link: "/",
    img: "/Ancient Roman architecture.jpg",
    title: "CASE Study 001",
    mainTitle:
      "MK: How can we fix non-functional elements, responsiveness, and user interaction issues?",
    tags: ["UX Research", "Ui Design", "Prototyping"],
  },
  {
    link: "/",
    img: "/Ancient Roman architecture.jpg",
    title: "CASE Study 001",
    mainTitle:
      "MK: How can we fix non-functional elements, responsiveness, and user interaction issues?",
    tags: ["UX Research", "Ui Design", "Prototyping"],
  },
  {
    link: "/",
    img: "/Ancient Roman architecture.jpg",
    title: "CASE Study 001",
    mainTitle:
      "MK: How can we fix non-functional elements, responsiveness, and user interaction issues?",
    tags: ["UX Research", "Ui Design", "Prototyping"],
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectSlider />
      {data.map((item, i) => (
        <Section data={item} key={i} index={i} />
      ))}
    </div>
  );
}
