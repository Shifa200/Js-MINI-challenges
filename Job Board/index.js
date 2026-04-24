const JOBS_URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const ITEM_URL = "https://hacker-news.firebaseio.com/v0/item/";

const jobsContainer = document.getElementById("jobs");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let jobIds = [];
let currentPage = 0;
const PAGE_SIZE = 6;

async function fetchJobsIds() {
    const res = await fetch(JOBS_URL);
    jobIds = await res.json();

}

async function fetchJobsByPage(page) {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const ids = jobIds.slice(start, end);



const jobs = await Promise.all(
    ids.map(id => 
        fetch(`${ITEM_URL}${id}.json`).then(res => res.json ())

    )
);
return jobs;
}

function renderJobs(jobs) {
    jobs.forEach(job => {
        const div = document.createElement("div");
        div.className = "job";

        const titleHTML = job.url
        ?  `<a href="${job.url}" target="_blank">${job.title}</a>`
        : job.title;

        div.innerHTML = `
        <h3>${titleHTML}</h3>
        <p>
        Posted by: ${job.by} <br/>
        Date: ${new Date(job.time * 1000).toLocaleString()}
        </p>
        `;

        jobsContainer.appendChild(div);
    });
}


async function loadMoreJobs() {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Loading...";
    const jobs = await fetchJobsByPage(currentPage);

    renderJobs(jobs);
    currentPage++;


if (currentPage * PAGE_SIZE >= jobIds.length) {
        loadMoreBtn.style.display = "none";
}
 else {
        loadMoreBtn.disabled = false;
        loadMoreBtn.textContent = "Load More";
}

}

async function init() {
  await fetchJobsIds();
  await loadMoreJobs(); // initial 6 jobs
}

loadMoreBtn.addEventListener("click", loadMoreJobs);

init();
