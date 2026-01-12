
import React, { useState, useEffect } from 'react';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const Navigation = () => (
    <nav className="bg-stone-900 text-stone-100 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={() => setCurrentPage(Page.Home)}
          className="text-xl font-bold tracking-tight hover:text-stone-300 transition-colors uppercase"
        >
          Belonging in Bangladesh
        </button>
        <div className="flex gap-6 text-sm font-semibold uppercase tracking-wider">
          <button 
            onClick={() => setCurrentPage(Page.Home)}
            className={`${currentPage === Page.Home ? 'border-b-2 border-stone-100' : 'hover:text-stone-300'} transition-all py-1`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage(Page.Post1)}
            className={`${currentPage === Page.Post1 ? 'border-b-2 border-stone-100' : 'hover:text-stone-300'} transition-all py-1`}
          >
            Post 1
          </button>
          <button 
            onClick={() => setCurrentPage(Page.Post2)}
            className={`${currentPage === Page.Post2 ? 'border-b-2 border-stone-100' : 'hover:text-stone-300'} transition-all py-1`}
          >
            Post 2
          </button>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-stone-200 text-stone-600 py-12 mt-20 border-t border-stone-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm">© 2026 Belonging in Bangladesh: Voices at the Margins</p>
        <p className="mt-2 text-xs italic">A qualitative research project on faith, identity, and citizenship.</p>
      </div>
    </footer>
  );

  const LandingPage = () => (
    <div className="animate-fadeIn">
      <header className="py-20 bg-stone-100 border-b border-stone-200 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 leading-tight">
            Belonging in Bangladesh: <br/><span className="text-stone-600 italic font-normal">Voices at the Margins</span>
          </h1>
          <p className="text-stone-500 font-medium uppercase tracking-widest text-sm">Appeal to the General</p>
        </div>
      </header>
      
      <article className="max-w-3xl mx-auto px-4 prose prose-stone lg:prose-lg">
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-stone-900">
          Belonging in Bangladesh: Voices from the Margins is a web-based project that attempts to
          explain the significance of faith, identity, and citizenship in Bangladesh today. The blog is the
          consequence of qualitative research work as the purpose of which was to become familiar with
          the lived experience of religious minorities in the country where the constitutional secularism
          and powerful Islamic identity politics mingle. Our project investigates the gray space between
          the legal provision of the freedom of religion and the realities of inclusivity and non-inclusivity on
          a day-by-day basis through individual narratives, scholarly commentary, and questioning the
          concept of inclusion and exclusion itself.
        </p>

        <p className="mt-6">
          The essay of pluralism at its lowest ebb is fascinating in Bangladesh with a rich mosaic of
          Hindu, Buddhists, Christians and Ahmadiyya people. How minorities respond to a more
          polarized citizenship world? And what does interfaith dialogue have to do with creating social
          cohesion? And what has the recent change of politics to say of minority security? And minority
          belonging? This blog is not all about solutions that are easy to grasp but it instead gives a voice
          to the voices of the marginalized which is not typically considered in the mainstream discourse.
        </p>

        <p className="mt-6">
          On the following entries, we shall generalize data of the in depth interviews, secondary research
          and theoretical frameworks of anthropology, political science and sociology. All the posts
          discuss a particular element of the minority life, both the individualization of the identity through
          personal discussion in the open spaces and the structural impact of belonging. And through the
          emphasis on personal experience and the academic knowledge, we are hoping to contribute to
          a more nuanced, empathetic understanding of what it is like to be a religion minority in
          Bangladesh in the contemporary world.
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-6 border-t border-stone-200 pt-10">
          <div className="flex-1 bg-white p-8 border border-stone-200 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setCurrentPage(Page.Post1)}>
            <p className="text-stone-600 text-sm mb-4">The Unseen work of Belonging: The Politics of Identity in mundane space in Bangladesh.</p>
            <span className="text-stone-900 font-bold text-xs uppercase tracking-widest hover:underline">Read Post →</span>
          </div>
          <div className="flex-1 bg-white p-8 border border-stone-200 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setCurrentPage(Page.Post2)}>
            <p className="text-stone-600 text-sm mb-4">Between Promise and Reality: The Bangladesh Disputed Land of Citizenship to Religious Minorities.</p>
            <span className="text-stone-900 font-bold text-xs uppercase tracking-widest hover:underline">Read Post →</span>
          </div>
        </div>
      </article>
    </div>
  );

  const BlogPost1 = () => (
    <div className="animate-fadeIn py-16">
      <article className="max-w-3xl mx-auto px-4 prose prose-stone lg:prose-lg">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">BLOG POST 1: The Unseen work of Belonging.</h1>
          <p className="text-stone-600 italic text-xl">The Politics of Identity in mundane space in Bangladesh.</p>
        </header>

        <p>
          It is a ritual that Anil Das performs when he wakes up in Dhaka: he lights up a lamp in a small,
          inconspicuous prayer-niche in his stationery store. It is as though it should be the pillar of my
          house, says he. It is difficult to find on a daily basis but in case of its frailty, the shaking of the
          whole house is executed (Personal interview, December 30, 2025). This prayerful meditation
          binds him when he begins to enter the realm of the so-called social life, in which his Hindu
          manhood must be disposed of, appeased, or concealed quite frequently. That is where Anil
          throws some light in one very significant but extremely overlooked side of the minority life in
          Bangladesh what I might term as the invisible labor of belonging. This notion is a manifestation
          of an ongoing process of cognitive, emotional and practical work that the religious minorities do
          to seek their place in the social fields that their identity describes them as other. It is a
          collaboration between people as well as a work which is fundamentally predetermined by still
          greater historical, political, and discursive forces that establish the guidelines within which
          religious expression is admissible in a majority-Muslim nation.
        </p>

        <p className="mt-6">
          This daily negotiation must be understood within the framework of what Talal Asad calls religion
          as a discursive tradition, an impermanent historical practice, institution, and most importantly,
          power relation (Asad, 2007). In Bangladesh the Islamic religion at the subtext of the underlays
          of the state serves as a normative discourse much like it directly and indirectly influences social
          etiquettes, state symbolism, and morality in the society. This forms a social space where
          religious expressions of the minorities like Anil are ever subjected to a non-written standard of
          belonging. Not even his strategic options, like the disguise of overt religious iconography in his
          store, his self-naming himself as an affable and neutral title of Anil Bhai to outweigh the
          prejudice which his last name, Das, may give him, are examples of personal choice, but of
          micro-strategies of accommodation. They too are a juggling around the edges of the acceptable
          (Asad, 2007, p. 662), a never-ending scanning of the social environment to establish where and
          how far his religion can safely be practised.
        </p>

        <p className="mt-6">
          The mental and emotional strain of such constant action is heavy and wearying. It is the type of
          low-grade fatigue that does not retire, a loneliness due to the feeling that he is split in half, a
          well-controlled public image and a true inner self (Personal interview, December 30, 2025).
          Internal fragmentation resonates with the altered perception of modernity and religion of a
          sociologist, Peter Berger. It is modernity that does not lead to the extinction of religion, but to the
          state of acute pluralism where people have different and, in most cases, conflicting worldviews
          (Berger, 2014). This pluralism may form a buffet of choices to the members of religious majority.
          It is an arena of unrelenting and unfair negotiation to the minorities. Their experience is the
          phenomenon of cognitive contamination as used by Berger in a very acute sense: they are
          excessively conscious of the majority version of the world that is dominant and they must make
          constant negotiations on their own identity and practice with it. It does not generate a resolute,
          chosen identification but a condition of what might be referred to as conditional belonging a
          sense of belonging which is tentative and which depends on the success of a successful
          monitoring of the self.
        </p>

        <p className="mt-6">
          This stress of this unseen work can best be seen and experienced during the period of the
          communal religious celebration. Anil recounts the manner in which the religious bliss of Durga
          Puja had been mugged down by the ominous cloud of foreigners who were observed hovering
          around their community pandal, making loud and disparaging comments about the idols
          (Personal interview, December 30, 2025). They were present physically and passive onlookers
          of the police. This transformed a gathering of unity and prayers into a destination of
          helplessness and apprehension. The eventual decision of the community to outsource security
          at the event in future is the material and economic cost of this labour: a huge financial burden
          on such a small community. The final communal expression of collective identity is a religious
          festival, which is not a place to give themselves up, but a logistical and psychological
          accomplishment of risk management. The latter are reinforced by the accounts given by other
          organizations, such as Human Rights Watch (2023), which also includes the violence, the
          vandalism, the intimidation at the minority festivals as having produced a chilling effect at such a
          large scale and pushing the religious expression into the privacy domain, and promoting the
          message of second-class citizenship.
        </p>

        <p className="mt-6">
          However, the narrative of limitation and victimization would not be complete without the
          presence of the story about constraint and its subsequent resolution. The strategies of
          resistance and active creation of alternative spaces of authenticity and solidarity can also be
          classified as resilience strategies and are included in the concept of the idea of the invisible
          labor. It is also the friends, both Muslim and Hindu that provide Anil the much needed relief
          since he is able to forget his image at least in the eyes of his close friends. Further, such
          information of the interviews indicates that it is the events of unqualified inclusion which is in fact
          pure and even unexpected that happen in the fertile soil of the commonality of the Bengali
          culture as compared to the more belligerent soil of theology. The most powerful belonging
          memory that Anil possessed was the time his son recited dramatically the work by the poet Kazi
          Nazrul Islam at an event at the school (Personal interview, December 30, 2025). By this time the
          Muslim parents who most of all formed the audience did not feel that it was a Hindu boy, but
          rather an unusually good young Bengali who was a typical cultural hero. The cultural system of
          symbols by the anthropologist Clifford Geertz presented as a model of religion can be of use in
          the given case (Geertz, 1966). The symbols of the culture that are commonly used such as the
          poetry of Nazrul, the accent of the Bengali language can in such cultural incidences be a
          momentous overriding to the religious symbols brought to deviate and this may become a
          formidable overriding which will in itself provide a taste of a pluralistic belonging that will be
          based on a shared heritage.
        </p>

        <section className="mt-16 bg-stone-100 p-8 rounded border border-stone-200">
          <h3 className="text-lg font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">References</h3>
          <ul className="text-sm space-y-3 text-stone-700 list-none pl-0">
            <li>Asad, T. (2007). Asad Talal and his interlocutors–Islam as a discursive tradition. Comparative Studies of South Asia, Africa and Middle East, 27(3), 656 672.</li>
            <li>Berger, P. L. (2014). The plurality of the altars of modernity: The quest of the paradigm of religion in a pluralistic era. De Gruyter.</li>
            <li>Geertz, C. (1966). Cultural system of religion. M. Lambek (Ed.), A reader in the anthropology of religion (pp. 5876). Wiley-Blackwell.</li>
            <li>Human Rights Watch. (2023). Bangladesh: Violence on religious minorities. Human Rights Watch.</li>
            <li>Anil Das. (1969, December 30). Personal interview.</li>
          </ul>
        </section>
      </article>
    </div>
  );

  const BlogPost2 = () => (
    <div className="animate-fadeIn py-16">
      <article className="max-w-3xl mx-auto px-4 prose prose-stone lg:prose-lg">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase">BLOG POST number 2: <span className="block font-normal italic lowercase mt-2">Between Promise and Reality.</span></h1>
          <p className="text-stone-600 font-medium text-lg uppercase tracking-tight">The Bangladesh Disputed Land of Citizenship to Religious Minorities.</p>
        </header>

        <p>
          The Bangladesh constitution is a contradiction. It opens with the Bismillah which is an Islamic
          declaration but Article 41 grants every citizen the right to confess, observe, or spread any
          religion. This constitutional hypocrisy is a real life experience of the religious minorities of the
          country, the recognition and marginalization of which is an abyss between the statement and the
          actual exercise of equal citizenship. This is called a gap or a chasm that is a characteristic of life
          of minorities and this blog entry speaks on such a controversial ground. We shall base our
          examination of how citizenship among minorities can be more conditional, how the state
          protection fails, and how the solidarity on the grassroots level finds the weak linkages through
          the cracks based on the information of the interviews of Anil Das and theoretical approaches of
          various scholars like Jurgen Habermas and Sudipta Kaviraj.
        </p>

        <p className="mt-6">
          The citizenship has some form of conditionality to Anil Das, a Hindu small business owner. The
          contributions of his father in the 1971 Liberation War of the country are a very legitimate source
          of his pride. Nevertheless, this hubris comes with a sense of protectionism when political
          tension hits and then he can also be stereotypical of being viewed to display the national flag
          too assertively as it can be interpreted as a sign of provocation rather than patriotism (Personal
          interview, December 30, 2025). This internal conflict may be the most illustrative illustration of
          an extremely crucial one by the political theorist Sudipta Kaviraj about the distinction between
          plurality and pluralism (Kaviraj, 2021). It is undeniable that Bangladesh is a pluralistic religion:
          the demographic heterogeneity that is represented by its Hindu, Buddhist, Christian, and other
          groups. However, it can hardly ever achieve something close to real pluralism the
          political-ethical regimes in which the same diversity is positively valued, preserved and
          cultivated as a civic good. The result is citizenship but by practice incomplete, but granted by
          law. The minorities are actual citizens yet they tend to feel like temporary members of the
          national community, they might not be accepted to be members of the community unless the
          political circumstances and the social acceptability.
        </p>

        <p className="mt-6">
          The most dangerous to display itself is the abyss between law and experience, which manifests
          itself in the failure of the institutions of the state to provide coherent and equivalent protection.
          The story of Durga Puja that Anil was witnessing, where even passive policing presence did not
          stop the people who wanted to harass them, is an embodiment of the bigger tendency which
          has been reported by human rights observers (Human Rights Watch, 2023). The state machine,
          which is the very institution that is meant to guarantee something in a constitution, failing to do
          something decisive does not simply make a certain act of harassment possible. It takes the
          initiative to transform the abstract legal right to the non-accessible privileges. It sends a very
          powerful, toxic message to the citizens that are the minority members: you are a purchased
          safety; you are a welcome that depends on the will of the local law and his/her capacity to be
          tolerant of the majority community.
        </p>

        <p className="mt-6">
          Habermas philosophical work is a great instrument in deciding on the content of this chasm. He
          draws the line between toleration that is a passive acceptance of the difference and mutual
          recognition that is founded on equal respect and civic equality (Habermas, 2004). Bangladesh
          formally practices tolerance of minority religions, although, in fact, just as in the society, there is
          a failure of giving the minority religions the same attention that it accords them to be fully
          assimilated as a citizen of Bangladesh. Toleration can be revoked at any convenience; it does
          imply some sort of superiority-inferiority relationship between the tolerator and the tolerated. The
          recognition, in its turn, assumes a building block equality, as well as a shared civic identity. The
          difficulty in the transition between being viewed as a tolerated Kabil Hindus and being viewed as
          a recognized and equal citizen of Bengali people is the key struggle.
        </p>

        <p className="mt-6 font-bold text-stone-900 border-l-4 border-stone-800 pl-4 py-2 my-8">
          The biggest challenge is to be a Hindu and to be regarded as an equal citizen of the people of
          Bengali.
        </p>

        <p className="mt-6">
          The explanation of this gap between the two realms cannot be made complete without the
          historical and political background as historical and political events as narrated by analysts like
          Ali Raza (2004) about how this gap has been maintained and even grown. It is the increasing
          instrumentalization of the religious identity which has been brought about by increasing political
          salience of Islamist parties that have taken place since the restoration of parliamentary
          democracy in the 1990s. A certain, politicized conception of the Islamic identity has increasingly
          been turned into a test of the genuine nationalism of Bangladesh. It is a political project that
          exerts a lot of pressure on the social structure. It violently erases the non-Muslim identities
          which are greatly manifested in the public and places the minority religious practices in the more
          personal, domestic dimension. This leads to the fact that even the open statement of faith,
          which is, as we all know a constitutional right, is now turned into the calculated act of courage,
          rather than it is a normal practice of citizenship, as was the case with the festival Anil attended.
        </p>

        <p className="mt-6">
          Nevertheless, within this criticism of the structural holes and political requirements, the
          information collected in the interview shows powerful pushing forces. That gap is not absolute
          and is being put into little significant uses not necessarily by the state, but by civil society and
          through the moral courage of an individual. It is a very deep story of his Muslim neighbor, Mr.
          Haques, who silently sat in front of his shop, in a tense moment, as a quiet demonstration of
          protection, which Anil wrote (Personal interview, December 30, 2025). This did not exist as a
          state sanctioned security but as neighborhood generated mutual recognition in its crudest state,
          the accepting of neighborhood and humanity which transcended the religious distinction.
        </p>

        <p className="mt-6">
          It, therefore, appears that the effectiveness of interfaith dialogue is optimized and is most
          probably preserved not in a top-down, state-funded exercise, but in this process of relations, as
          an organic phenomenon, occurring in our everyday lives. It is there in the reciprocity of boasting
          of a cultural performance, the neighborliness of keeping guard. This means that there is
          bi-directional approach. Top-down reformation- strengthening of anti-discrimination laws,
          transforming the realization of this law strict and impartial, etc. -is an absolute requirement in the
          reconstruction of the structural image. This, however, should be underpinned with a similar,
          top-down effort of developing a recognition culture. It involves exaggerating stories of cohesion
          and inventing an everyday tongue that glorifies ordinary Bengali identity to be spacious enough
          to fit its religious plurality.
        </p>

        <section className="mt-16 bg-stone-100 p-8 rounded border border-stone-200">
          <h3 className="text-lg font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">References</h3>
          <ul className="text-sm space-y-3 text-stone-700 list-none pl-0">
            <li>Constitution of the People’s Republic of Bangladesh. (1972, amended 2011).</li>
            <li>Habermas, J. (2004). Religious tolerance: The pacemaker for cultural rights. Philosophy, 79(307), 5–18.</li>
            <li>Human Rights Watch. (2023). Bangladesh: Events of violence against religious minorities. Human Rights Watch.</li>
            <li>Kaviraj, S. (2021). Plurality and pluralism. In K. Barkey, S. Kaviraj, & V. Naresh (Eds.), Negotiating democracy and religious pluralism (pp. 222–245). Oxford University Press.</li>
            <li>Personal interview with Anil Das. (2025, December 30).</li>
            <li>Riaz, A. (2004). God willing: The politics of Islamism in Bangladesh. Rowman & Littlefield.</li>
          </ul>
        </section>
      </article>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-800 selection:text-stone-50">
      <Navigation />
      <main className="flex-grow">
        {currentPage === Page.Home && <LandingPage />}
        {currentPage === Page.Post1 && <BlogPost1 />}
        {currentPage === Page.Post2 && <BlogPost2 />}
      </main>
      <Footer />
      
      {/* Styles for animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
