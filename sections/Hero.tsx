interface Props {
  /**
   * @description The description of name.
   * @format rich-text
   */
  content?: string;
}

export default function Hero({ content = "<h1>Title</h1>" }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
