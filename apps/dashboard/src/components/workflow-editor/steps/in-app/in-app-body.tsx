import { useFormContext } from 'react-hook-form';
import { liquid } from '@codemirror/lang-liquid';
import { EditorView } from '@uiw/react-codemirror';

import { FormControl, FormField, FormItem, FormMessage } from '@/components/primitives/form/form';
import { InputField } from '@/components/primitives/input';
import { Editor } from '@/components/primitives/editor';
import { capitalize } from '@/utils/string';

const bodyKey = 'body';

export const InAppBody = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      control={control}
      name={bodyKey}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <InputField size="md" className="h-32 px-1" state={errors[bodyKey] ? 'error' : 'default'}>
              <Editor
                placeholder={capitalize(field.name)}
                size="md"
                id={field.name}
                extensions={[
                  liquid({
                    variables: [{ type: 'variable', label: 'asdf' }],
                  }),
                  EditorView.lineWrapping,
                ]}
                value={field.value}
                onChange={(val) => field.onChange(val)}
              />
            </InputField>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
