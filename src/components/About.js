export default function About(props) {

  return (
    <div className="container px-3 py-1" style={{backgroundColor: props.mode.bgcol}} id="featured-3">
      <h3 style={{color: props.mode.col}} className="pb-2 border-bottom">About Text Utils page</h3>
      <div className="row g-4 py-3 row-cols-1 row-cols-lg-1">
        <div className="feature col">
          <h3 style={{color: props.mode.col}}>String Functions</h3>
          <p style={{color: props.mode.col}}>
            Apart from counting words and characters, our online editor can help
            you to improve word choice and writing style, and, optionally, help
            you to detect grammar mistakes and plagiarism. To check word count,
            simply place your cursor into the text box above and start typing.
            You'll see the number of characters and words increase or decrease
            as you type, delete, and edit them. You can also copy and paste text
            from another program over into the online editor above. The
            Auto-Save feature will make sure you won't lose any changes while
            editing, even if you leave the site and come back later. Tip:
            Bookmark this page now. Knowing the word count of a text can be
            important. For example, if an author has to write a minimum or
            maximum amount of words for an article, essay, report, story, book,
            paper, you name it. WordCounter will help to make sure its word
            count reaches a specific requirement or stays within a certain
            limit.
          </p>
        </div>
      </div>
      <hr />  
    </div>
  );
}
