document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitComment");
    const commentInput = document.getElementById("commentInput");
    const commentsContainer = document.getElementById("commentsContainer");
    submitBtn.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText) {
    addComment(commentText); //function
    commentInput.value = ""; // Clear input field after adding
    }
    });
    });

    // Using event delegation for reply and functionality
    commentsContainer.addEventListener("click", (e) => {
    if (e.target.className.includes("replyBtn")) {
    const parentComment = e.target.parentElement;
    const replyInput = parentComment.querySelector(".replyInput"); //select the text area.
    const replyText = replyInput.value.trim();
    if (replyText) {
    addReply(parentComment, replyText); 
    replyInput.value = ""; // Clear input field
    }
    } });

    function addComment(text) { //this func. handles only the main comment section.
        const commentElement = document.createElement("div");
        commentElement.className = "repliesContainer";
        commentElement.innerHTML = `<p>${text}</p>
        <button class="replyBtn">Reply</button>
        <textarea class="replyInput" placeholder="Write a reply..."></textarea>`;
        commentsContainer.appendChild(commentElement);
        }

        function addReply(parentComment, text) { //(where to add the text, what is the text) 
// as there are more than 1 parent element, need to know on which element the text is added.
//this func. creates a recursion - reply inside reply inside reply.
            const replyElement = document.createElement("div");
            replyElement.className = "repliesContainer";
            replyElement.innerHTML = `<p>${text}</p>`;
            const btn = document.createElement("button"); //creating a reply btn manually.
            btn.className = "replyBtn";
            btn.innerText = "Reply";
            replyElement.appendChild(btn);
            const replyInput = document.createElement("textarea"); //creating a text area manually, 
            // just below the reply btn when you hover over the reply btn you could find it.
            replyInput.className = "replyInput";
            replyInput.placeholder = "Write a reply...";
            replyElement.appendChild(replyInput);
            parentComment.appendChild(replyElement);
            // parentComment.classList.remove("collapsed");
            }

// const commentElement = document.createElement("div");
// commentElement.className = "repliesContainer";
// You're not duplicating or replacing the original div.
// You're creating a new element with the same class so that all comments and replies 
// share the same styling.
// This is totally normal in dynamic DOM manipulation.

// addreply() can be written like this also.
                // function addReply(parentComment, text) { 
                // const replyElement = document.createElement("div");
                // replyElement.className = "repliesContainer";
                // replyElement.innerHTML = `<p>${text}</p>
                // <button class="replyBtn">Reply</button>
                // <textarea class="replyInput" placeholder="Write a reply..."></textarea>`;
                // parentComment.appendChild(replyElement);
                // }