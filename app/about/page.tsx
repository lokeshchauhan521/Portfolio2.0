import Skills from './components/Skills'

export default function About() {
  return (
    <>
      <section className="max-w-4xl mx-auto pt-12 pb-4 px-6">
        <h2>About Me</h2>
        <div className="mt-6">
          <div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Expedita, porro necessitatibus. Quod nihil eius, quam odit, natus
              aspernatur iure provident cupiditate repellat tenetur aliquid
              similique. Eaque deserunt harum modi est. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Sed ipsa, similique nesciunt
              rem culpa deleniti mollitia voluptatibus quibusdam, id expedita
              optio excepturi molestias eum ab natus, corporis sequi et fugiat!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              similique magnam sit qui hic? Perspiciatis veniam, nisi eveniet
              ab, saepe expedita blanditiis nihil, eaque repellat facere
              officiis dolore incidunt repudiandae?
            </p>
          </div>
        </div>
        <Skills />
      </section>
    </>
  )
}
