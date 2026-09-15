export const metadata = { title: "Política de Privacidade", description: "Como a Rede Saúde Mais trata seus dados." };

export default function Page() {
  return (
    <section className="section-rythm">
      <div className="container-site measure">
        <h1 data-words className="sec-title font-display text-3xl font-bold text-[#162B4D]">Política de Privacidade</h1>
        <div aria-hidden="true" className="sec-divider h-[3px] w-12 rounded-full bg-[#00A9C5]" />
        <div className="space-y-4 text-sm leading-relaxed text-[#333333]/90">
          <p>Site institucional da Rede Saúde Mais. Não coletamos dados por formulário — o contato é feito diretamente pelo WhatsApp/telefone de cada unidade.</p>
          <h2 className="font-display text-lg font-semibold text-[#162B4D]">Dados de contato</h2>
          <p>Ao clicar em WhatsApp, telefone, mapa ou redes sociais, você é direcionado a serviços de terceiros (WhatsApp/Meta, Google Maps, Instagram, Facebook), sujeitos às políticas próprias.</p>
          <h2 className="font-display text-lg font-semibold text-[#162B4D]">Resultados de exames</h2>
          <p>O botão “Resultados de Exames” abre o portal externo resultados.app.br, com política própria.</p>
          <h2 className="font-display text-lg font-semibold text-[#162B4D]">Cookies</h2>
          <p>Este site não define cookies de rastreamento próprios.</p>
          <h2 className="font-display text-lg font-semibold text-[#162B4D]">Contato</h2>
          <p>Dúvidas sobre privacidade: contato@redesaudemais.com</p>
        </div>
      </div>
    </section>
  );
}
