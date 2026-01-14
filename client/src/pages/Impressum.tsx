import { Layout } from "@/components/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[#050505] min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 border-b border-white/10 pb-8">
            IMPRESSUM
          </h1>
          
          <div className="space-y-12 text-white/70">
            <div>
              <h2 className="text-xl text-[#BF953F] font-bold mb-4 uppercase tracking-widest">Angaben gemäß § 5 TMG</h2>
              <p className="text-lg font-serif text-white">MVM Business Management</p>
              <p>Dubai</p>
              <p>Vereinigte Arabische Emirate (UAE)</p>
            </div>

            <div>
              <h2 className="text-xl text-[#BF953F] font-bold mb-4 uppercase tracking-widest">Kontakt</h2>
              <p>E-Mail: info@lr-business.eu</p>
              <p>Web: www.lr-business.eu</p>
            </div>

            <div>
              <h2 className="text-xl text-[#BF953F] font-bold mb-4 uppercase tracking-widest">Verantwortlich für den Inhalt</h2>
              <p>MVM Business Management</p>
              <p>Dubai, UAE</p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h2 className="text-xl text-[#BF953F] font-bold mb-4 uppercase tracking-widest">Haftungsausschluss</h2>
              
              <h3 className="text-white font-bold mt-6 mb-2">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-white font-bold mt-6 mb-2">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-white font-bold mt-6 mb-2">Urheberrecht</h3>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/40">
                Hinweis: Dies ist eine unabhängige Partnerseite von LR Health & Beauty Systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
