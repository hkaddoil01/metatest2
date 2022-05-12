import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'
import { Chrono } from 'react-chrono'

const dataItems = [
  {
    title: '1953',
    cardTitle: '石峽尾大火',
    url: 'https://zh.wikipedia.org/wiki/%E7%9F%B3%E7%A1%A4%E5%B0%BE%E5%A4%A7%E7%81%AB',
    cardSubtitle: 'subtitle- 1953 石峽尾大火',
    cardDetailedText: `detail- 1953 石峽尾大火`,
  },
  {
    title: '1955',
    cardTitle: '李鄭屋發現漢代古墓',
    cardSubtitle: `1955 李鄭屋發現漢代古墓`,
  },
  {
    title: 'June 1941',
    cardTitle: 'Operation Barbarossa',
    cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
    cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
      Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
      On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
  },
  {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
      Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`,
  },
]

const TimelinePage = () => {
  return (
    <>
      <MetaTags title="Timeline" description="Timeline page" />
      <Navbar />
      <h1>This is TimelinePage</h1>

      <div style={{ width: '100%', height: '90vh' }}>
        <Chrono
          items={dataItems}
          mode="VERTICAL"
          slideShow
          slideItemDuration={4000}
          scrollable={{ scrollbar: false }}
        >
          <div style={{ margin: '1rem' }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image11.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image12.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image13.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image14.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image15.png"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ margin: '1rem' }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image21.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image22.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image23.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image24.png"
                    />
                  </td>
                  <td>
                    <img
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      alt="test"
                      src="/image25.png"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div style={{ width: '250px', height: '250px' }}>
              <img
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                alt="test"
                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
              />
            </div>
          </div>
          <div>
            <h3>This is a List</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div>
            <h3>Dunkirk</h3>
            <p>
              The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
              in Dunkirk (Dunkerque), France, during the Second World War,
              between the Allies and Nazi Germany. As the Allies were losing the
              Battle of France on the Western Front, the Battle of Dunkirk was
              the defence and evacuation to Britain of British and other Allied
              forces in Europe from 26 May to 4 June 1940.
            </p>
            <p>
              After the Phoney War, the Battle of France began in earnest on 10
              May 1940. To the east, the German Army Group B invaded the
              Netherlands and advanced westward. In response, the Supreme Allied
              Commander—French General Maurice Gamelin—initiated "Plan D" and
              entered Belgium to engage the Germans in the Netherlands. The plan
              relied heavily on the Maginot Line fortifications along the
              German–French border, but German forces had already crossed
              through most of the Netherlands before the French forces arrived.
              Gamelin instead committed the forces under his command, three
              mechanised armies, the French First and Seventh Armies and the
              British Expeditionary Force (BEF), to the River Dyle.
            </p>
          </div>
          <div style={{ margin: '1rem' }}>
            <h3>Table</h3>
            <table>
              <thead>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                  <td>Value 4</td>
                </tr>
                <tr>
                  <td>Value 5</td>
                  <td>Value 6</td>
                  <td>Value 7</td>
                  <td>Value 8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Chrono>
      </div>
    </>
  )
}

export default TimelinePage
