export function showLoader(){
    const loaderDiv = document.createElement('div');
    loaderDiv.classList.add('loader')
    loaderDiv.innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center fixed-top">
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>`;

    document.body.append(loaderDiv)
}

export function removeLoader(){
    document.querySelector(".loader").remove()
}

export function showProgress(){
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('top-progress')
    progressDiv.innerHTML = `<div class="progress fixed-top" style='height:10px'>
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
  </div>`;

    document.body.append(progressDiv)
}

export function removeProgress(){
    document.querySelector(".top-progress").remove()
}