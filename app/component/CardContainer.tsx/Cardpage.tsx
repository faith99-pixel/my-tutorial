type Props = {}
const Cardpage = (props: Props) => {
  const user = {
    firstName: "Jessica",
    lastName: "Randall",
    image: "https://placehold.co/300x300/8133F1/FFFFFF/png?text=AG",
    location: {
      street: null,
      city: "London,",
      country: "United Kingdom"
    },
    bio: "Front-end developer and avid reader.",
    socials: [
      {
        name: "Github",
        link: "https://github.com/jess"
      },
      {
        name: "Frontend Mentor",
        link: "https://fm.com/jess"
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com/jess"
      },
      {
        name: "Twitter",
        link: "https://twitter.com/jess"
      },
    ]
  }
  return (

    <main>
      <section className="bg-[#1F1F1F] w-[90%] h-fit mx-auto mt-8 p-14 rounded-xl md:w-[50%] lg:w-[25%]">
        <div className="flex flex-col items-center justify-center lg:h-[270px] lg:-mt-8">
          <img src={user.image} className="rounded-full w-20 h-20 object-cover lg:mb-2" />
          <div>
            <h3 className="text-xl font-[600] text-center text-white mt-2">{user.firstName} {user.lastName}</h3>
            <p className="text-center text-[#BFE347] mt-1 text-[12px] font-bold">{user.location.city} {user.location.country}</p>
            <p className="text-center my-4 text-white text-[12px]">"{user.bio}"</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-full lg:-mt-10 text-sm font-[650] -mb-4">
          {user.socials.map((social, index) => (
            <a href={social.link} className="flex flex-col items-center justify-center h-full bg-[#333333] my-2 w-[90%] rounded-md p-3 lg:w-[270px] hover:bg-[#302929] " key={index}>{social.name}</a>
          ))}
        </div>
      </section>
    </main>
  )
}
export default Cardpage