import PageTitle from '@/components/PageTitle'

export default function Impressum() {
  return (
    <div className="mt-24 text-left">
      <PageTitle>
        Under Construction{' '}
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </PageTitle>

      <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
        <h1>Header Level 1</h1>
        <p>
          <strong>Auf dem letzten Hause eines kleinen Dörfchens</strong> befand sich ein{' '}
          <abbr title="Behausung eines langbeinigen Vogels">Storchnest</abbr>. Die Storchmutter saß
          im Neste bei ihren vier Jungen, welche den Kopf mit dem kleinen{' '}
          <em>schwarzen Schnabel</em>, denn er war noch nicht rot geworden, hervorstreckten. Ein
          Stückchen davon stand auf der Dachfirste starr und steif der Storchvater{' '}
          <code>syntax</code>. Man hätte meinen können, er wäre aus Holz gedrechselt, so stille
          stand er. „Gewiss sieht es recht vornehm aus, dass meine Frau eine Schildwache bei dem
          Neste hat!“ dachte er. Und er stand unermüdlich auf{' '}
          <a href="#nirgendwo" title="Title für einem Bein">
            einem Beine
          </a>
          .
        </p>

        <h2>Header Level 2</h2>
        <ol>
          <li>Und was dann? fragten die Storchkinder.</li>
          <li>
            Dann werden wir aber doch gepfählt, wie die Knaben behaupteten, und höre nur, jetzt
            sagen sie es schon wieder!
          </li>
        </ol>

        <p>
          Unten auf der Straße spielte eine Schar Kinder und als sie die Störche erblickten, sang
          einer der dreistesten Knaben und allmählich alle <acronym title="zusammen">zus.</acronym>{' '}
          einen Vers aus einem alten Storchliede, so gut sie sich dessen erinnern konnten:
        </p>

        <blockquote cite="Hans Andersen">
          <p>
            Störchlein, Störchlein, fliege,
            <br />
            Damit ich dich nicht kriege, <br />
            Deine Frau, die liegt im Neste dein Bei deinen lieben Kindelein: Das eine wird gepfählt,
            Das andere wird abgekehlt, Das dritte wird verbrannt, Das vierte dir entwandt!
          </p>
          <p>
            <cite>Hans Andersen</cite>
          </p>
        </blockquote>

        <p>
          Höre nur, was die Jungen singen! sagten die kleinen Storchkinder. Sie sagen, wir sollen
          gebraten und verbrannt werden!
        </p>

        <h3>Header Level 3</h3>
        <ul>
          <li>Das eine wird gepfählt</li>
          <li>Das andere wird abgekehlt!</li>
        </ul>
      </div>
    </div>
  )
}
