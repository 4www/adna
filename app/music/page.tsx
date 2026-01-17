import Markdown from "@/components/common/Markdown";
import PageLayout from "@/components/common/PageLayout";
import { getAlbums, getPageContent, getSingles } from "@/lib/content";
import styles from "./Music.module.scss";

const formatReleaseMeta = (type: string, year: number) =>
  `${type} (${year})`;

export default async function Music() {
  const [content, albums, singles] = await Promise.all([
    getPageContent("music"),
    getAlbums(),
    getSingles(),
  ]);

  return (
    <PageLayout backgroundImage={content.backgroundImage}>
      <div className={styles.music}>
        <header>
          <h1 className={styles.music__heading}>{content.title}</h1>
          {content.body ? <Markdown content={content.body} /> : null}
        </header>
        <section className={styles.music__section}>
          <h2 className={styles.music__heading}>Albums</h2>
          <ul className={styles.music__grid}>
            {albums.map((album) => (
              <li key={`${album.title}-${album.year}`} className={styles.music__item}>
                {album.link ? (
                  <a href={album.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.music__cover}
                      src={album.coverImage}
                      alt={album.caption}
                    />
                  </a>
                ) : (
                  <img
                    className={styles.music__cover}
                    src={album.coverImage}
                    alt={album.caption}
                  />
                )}
                <div className={styles.music__caption}>{album.title}</div>
                <div className={styles.music__meta}>
                  {formatReleaseMeta(album.type, album.year)}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.music__section}>
          <h2 className={styles.music__heading}>Singles & EPs</h2>
          <ul className={styles.music__grid}>
            {singles.map((single) => (
              <li key={`${single.title}-${single.year}`} className={styles.music__item}>
                {single.link ? (
                  <a href={single.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.music__cover}
                      src={single.coverImage}
                      alt={single.caption}
                    />
                  </a>
                ) : (
                  <img
                    className={styles.music__cover}
                    src={single.coverImage}
                    alt={single.caption}
                  />
                )}
                <div className={styles.music__caption}>{single.title}</div>
                <div className={styles.music__meta}>
                  {formatReleaseMeta(single.type, single.year)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
