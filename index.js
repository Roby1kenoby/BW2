function increment(id) {
  const element = document.getElementById(id);
  let value = parseInt(element.textContent);
  element.textContent = value + 1;
  updateGuestCount();
}

function decrement(id) {
  const element = document.getElementById(id);
  let value = parseInt(element.textContent);
  if (value > 0) {
    element.textContent = value - 1;
  }
  updateGuestCount();
}

function updateGuestCount() {
  const adults = parseInt(document.getElementById("adults").textContent);
  const children = parseInt(document.getElementById("children").textContent);
  const infants = parseInt(document.getElementById("infants").textContent);
  const pets = parseInt(document.getElementById("pets").textContent);

  const totalGuests = adults + children + infants + pets;
  document.querySelector(
    ".dropdown-toggle"
  ).textContent = `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`;
}

document.querySelectorAll(".btn-outline-secondary").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.addEventListener("click", function (event) {
  let isClickInside =
    document.querySelector(".dropdown-menu").contains(event.target) ||
    document.querySelector(".dropdown-toggle").contains(event.target);
  if (!isClickInside) {
    let dropdown = bootstrap.Dropdown.getInstance(
      document.getElementById("guestDropdown")
    );
    if (dropdown && dropdown._isShown()) {
      dropdown.hide();
    }
  }
});
