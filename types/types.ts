export interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export interface PhotoComponentProps {
  photo: Photo;
  imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
  wrapperStyle: React.CSSProperties;
  layout: string;
  layoutOptions: Record<string, unknown>;
  photosCount: number;
}

export interface PhotoCollection {
  [category: string]: Photo[];
}

export interface Tab {
  id: string;
  label: string;
}
