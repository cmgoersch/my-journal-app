import "./form.css";
import Button from "./Button";

export default function Form() {
  return (
    <>
      <form className="form">
        <label class="motto_title" for="motto">
          Motto
        </label>
        <input class="motto_input" type="text" name="motto" id="motto" />
        <label class="notes_title" for="notes">
          Notes
        </label>
        <textarea class="notes_input" type="text" name="notes" id="notes" />
        <div className="button_center">
          <Button />
        </div>
      </form>
    </>
  );
}
