function toggleText() {
    const moreText = document.querySelector('.more-text');
    const showMore = document.querySelector('.show-more');

    if(moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block';
        showMore.textContent = 'Lihat lebih sedikit'
    } else {
        moreText.style.display = 'none';
        showMore.textContent = 'Lihat lebih banyak'
    }

}

//menu
