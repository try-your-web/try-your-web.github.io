document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.grid-item').forEach(item => {
		item.addEventListener('click', function() {
		const link = this.getAttribute('data-link');
		window.location.href = link;
		});
	});
});