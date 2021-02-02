export function AddTable({ person }) {
  return (
    <>
      <table class="table is-bordered mb-3">
        <thead>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </thead>
        <tbody>
          <tr>
            <td>{person.name}</td>
            <td>{person.gender}</td>
            <td>{person.age}</td>
          </tr>
        </tbody>

        <br />
      </table>
    </>
  );
}
