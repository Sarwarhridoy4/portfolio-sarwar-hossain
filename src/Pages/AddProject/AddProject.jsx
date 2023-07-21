import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";

const AddProject = () => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        // When files are dropped, set the value for 'images' field using react-hook-form setValue
        setValue("images", acceptedFiles);
      },
      accept: "image/*", // Accept only image files
      multiple: true, // Allow multiple image uploads
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('projectName', data.projectName);
            formData.append('slogan', data.slogan);
            formData.append('projectDescription', data.projectDescription);
            data.images.forEach((image) => formData.append('images', image));
      
            const response = await axios.post('https://portfolio-server-sarwarhridoy4.vercel.app/upload-project', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
      
            console.log(response.data);
          } catch (error) {
            console.error('Error submitting form:', error);
          }
    // console.log(data);
    reset();
    // Handle form submission logic here
  };
  return (
    <div className='backdrop-blur-2xl bg-transparent py-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-md mx-auto p-6 bg-gray-800 rounded shadow-md'
      >
        <div className='mb-6'>
          <label
            htmlFor='projectName'
            className='text-white text-sm font-medium mb-2 block'
          >
            Project Name
          </label>
          <Controller
            name='projectName'
            control={control}
            defaultValue=''
            rules={{ required: "Project Name is required" }}
            render={({ field, fieldState }) => (
              <input
                {...field}
                type='text'
                className={`w-full px-4 py-2 rounded border ${
                  fieldState.invalid ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-blue-500 bg-gray-900 text-white`}
              />
            )}
          />
          <p className='text-red-500 text-xs mt-1'>
            {errors.projectName?.message}
          </p>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='slogan'
            className='text-white text-sm font-medium mb-2 block'
          >
            Slogan
          </label>
          <Controller
            name='slogan'
            control={control}
            defaultValue=''
            rules={{ required: "Slogan is required" }}
            render={({ field, fieldState }) => (
              <input
                {...field}
                type='text'
                className={`w-full px-4 py-2 rounded border ${
                  fieldState.invalid ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-blue-500 bg-gray-900 text-white`}
              />
            )}
          />
          <p className='text-red-500 text-xs mt-1'>{errors.slogan?.message}</p>
        </div>

        <div className='mb-6'>
          <label
            htmlFor='projectDescription'
            className='text-white text-sm font-medium mb-2 block'
          >
            Project Description
          </label>
          <Controller
            name='projectDescription'
            control={control}
            defaultValue=''
            rules={{ required: "Project Description is required" }}
            render={({ field, fieldState }) => (
              <textarea
                {...field}
                rows='4'
                className={`w-full px-4 py-2 rounded border ${
                  fieldState.invalid ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-blue-500 bg-gray-900 text-white`}
              />
            )}
          />
          <p className='text-red-500 text-xs mt-1'>
            {errors.projectDescription?.message}
          </p>
        </div>

        {/* Multiple Image Input using react-dropzone */}
        <div className='mb-6'>
          <label
            htmlFor='images'
            className='text-white text-sm font-medium mb-2 block'
          >
            Images
          </label>
          <div
            {...getRootProps()}
            className={`w-full px-4 py-2 rounded border ${
              isDragActive ? "border-blue-500" : "border-gray-700"
            } focus:outline-none focus:border-blue-500 bg-gray-900 text-white`}
          >
            <input {...getInputProps()} />
            {acceptedFiles.length > 0 ? (
              <ul className='mt-2'>
                {acceptedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            ) : (
              <p>Drag `n` drop some files here, or click to select files</p>
            )}
          </div>
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProject;
