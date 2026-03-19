import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BeforeAfterSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  const testimonials = [
    {
      name: "Carla Mendes",
      age: 36,
      text: "Usei por algumas semanas e senti diferença real no inchaço e na disposição. Já comprei novamente.",
    },
    {
      name: "Renata Lima",
      age: 41,
      text: "Produto excelente, chegou rápido e me ajudou muito com a sensação de barriga pesada.",
    },
    {
      name: "Patrícia Souza",
      age: 33,
      text: "Fiquei surpresa com o resultado. Me senti mais leve e com mais confiança no dia a dia.",
    },
    {
      name: "Mariana Costa",
      age: 39,
      text: "Gostei bastante! Cumpriu o que promete e o atendimento foi ótimo do início ao fim.",
    },
    {
      name: "Luciana Alves",
      age: 45,
      text: "Resultado visível para mim, principalmente na rotina após as refeições. Recomendo demais.",
    },
    {
      name: "Fernanda Rocha",
      age: 37,
      text: "Já testei outros e esse foi o melhor. Me adaptei super bem e pretendo continuar usando.",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const autoplay = window.setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => window.clearInterval(autoplay);
  }, [api]);

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Avaliações <span className="text-primary">REAIS</span> de Quem Usou e Aprovou
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Depoimentos de clientes satisfeitos com OZENFIT CAPS.
        </p>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
          aria-label="Depoimentos de clientes"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <article className="testimonial-card h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">
                        {testimonial.name}, {testimonial.age} anos
                      </p>
                      <p className="text-xs text-primary font-semibold">Compra verificada ✓</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">5/5</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    “{testimonial.text}”
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-10">
          <a href="#prezzo" className="btn-cta pulse-animation">
            QUERO COMEÇAR AGORA
          </a>
          <p className="mt-3 text-sm font-semibold text-muted-foreground">💰 Pagamento só na entrega!</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
