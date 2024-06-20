
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>At Pizza Rasoi, we believe that every pizza should be a delightful experience, crafted with passion and served with love. Our journey began with a simple idea: to bring the authentic taste of freshly made pizzas right to your doorstep. We are dedicated to using only the finest ingredients to create mouth-watering pizzas that leave you craving for more.</p>
          <p>Pizza Rasoi was founded by a team of food enthusiasts who share a deep love for pizza. Our mission is to redefine the pizza ordering experience by combining traditional recipes with modern technology. We understand the joy of biting into a perfectly baked pizza with a crispy crust, rich tomato sauce, and melted cheese. That's why we go the extra mile to ensure that every pizza we deliver meets our high standards of quality and taste.</p>
      
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'} mainHeader={'Contact'}
        />
        <div className="mt-8">
          <a href="tel:+45738123123" className="text-4xl underline text-gray-500">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
