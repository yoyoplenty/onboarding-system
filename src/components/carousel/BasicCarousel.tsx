import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { styles } from "./Carousel";

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (props: CarouselRenderItemProps<T>) => React.ReactElement<CarouselRenderItemProps<T>>;
}

export const BasicCarousel = <T extends any>({ items, renderItem }: CarouselProps<T>) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo, snapPointIndexes } = useSnapCarousel();

  return (
    <div style={styles.root}>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>

      <div style={styles.controls} aria-hidden>
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === 0 ? styles.nextPrevButtonDisabled : {}),
          }}
          onClick={() => prev()}
        >
          Prev
        </button>

        {pages.map((_, i) => (
          <button
            key={i}
            style={{
              ...styles.paginationButton,
              ...(activePageIndex === i ? styles.paginationButtonActive : {}),
            }}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        ))}

        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1 ? styles.nextPrevButtonDisabled : {}),
          }}
          onClick={() => next()}
        >
          Next
        </button>
      </div>
      <div style={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div>
    </div>
  );
};

export default BasicCarousel;
